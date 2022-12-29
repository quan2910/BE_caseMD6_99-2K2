import {AppDataSource} from "../data-source";
import {User} from "../model/user"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {SECRET} from "../middleware/auth";
import {Request, Response} from "express";

export class UserService {
    userRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log('Connected Database')
            this.userRepository = connection.getRepository(User)
        })
        this.userRepository = AppDataSource.getRepository(User);
    }

    getAll = async () => {
        let users = await this.userRepository.find()
        return users
    }
    save = async (user) => {
        console.log(user);
        let query = `select *
                     from users
                     where username = '${user.username}'`
        let userFind = await this.userRepository.query(query)
        if (userFind.length != 0) {
            return {
                mess: 'has the same name'
            }
        } else {
            user.password = await bcrypt.hash(user.password, 10)
            return await this.userRepository.save(user)
        }
    }

    checkLogin = async (userLogin) => {
        let user = {
            check: false,
            token: "",
            authenticUser: false
        }
        let userFind = await this.userRepository.query(`select *
                                                        from users
                                                        where username = "${userLogin.username}"`)
        console.log(userFind)
        if (userFind.length == 0) {
            user.check = false
            return user
        } else {
            let compare = await bcrypt.compare(userLogin.password, userFind[0].password)
            if (!compare) {
                user.check = false;
                return user
            }
            if (compare) {
                let payload = {username: userFind[0].username}
                let token = await jwt.sign(payload, SECRET, {
                    expiresIn: 36000
                })
                user.token = token;
                user.check = true;
                user.authenticUser = userFind
                return user
            }
        }
    }

    checkRegister = async (userRegister) => {
        let userFind = await this.userRepository.query(`select *
                                                        from users
                                                        where username = '${userRegister.username}'`);
        let check;
        if (userFind.length !== 0) {
            check = true
        } else {
            userRegister.password = await bcrypt.hash(userRegister.password, 10)
            check = false
        }
        return check
    }

    createUser = async (user) => {
        await this.userRepository.save(user);
    }
    edit = async (req: Request, res: Response) => {
        let idUser = +req.params.id;
        let data = req.body;
        let update = await this.userRepository.update(
            idUser,
            {
                username: data.username,
                password: await bcrypt.hash(data.password, 10),
                avatar: data.avatar,
                address: data.address,
                sex: data.sex
            })
        return update
    }
    checkChangePassword = async (idUser, oldPassword, newPassword) => {
        let user = {
            check: false,
            userFind: ''
        }
        let userFind = await this.userRepository.query(`select * from users where idUser = ${idUser}`);
        if(userFind.length === 0) {
            user.check = false;
        } else {
            let compare = await bcrypt.compare(oldPassword, userFind[0].password)
            if(!compare) {
                user.userFind = userFind
                user.check = false;
            }
            if(compare) {
                newPassword = await bcrypt.hash(newPassword, 10)
                await this.userRepository.query(`UPDATE users SET password = '${newPassword}' where idUser = '${idUser}'`)
                user.check = true
                user.userFind = userFind
            }
        }
        return user
    }
}