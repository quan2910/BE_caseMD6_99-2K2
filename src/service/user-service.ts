import {AppDataSource} from "../data-source";
import {User} from "../model/user"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {SECRET} from "../middleware/auth";

export class UserService {
    userRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log('Connected Database')
            this.userRepository = connection.getRepository(User)
        })
        this.userRepository = AppDataSource.getRepository(User);
    }

   getAll =async ()=>{
        let users = await this.userRepository.find()
       return users
   }
   save = async (user) => {
       console.log(user);
        let query = `select * from users 
where username = '${user.username}'`
       let userFind = await this.userRepository.query(query);


        if (userFind.length != 0 ){
            return {
                mess: 'has the same name'
            }
        }else {
            user.password = await bcrypt.hash(user.password,10)
            return await this.userRepository.save(user)
        }
   }

   checkLogin = async (userLogin)=>{
        let user = {
            check :false,
            token : "",
            authenticUser :false
        }
        let userFind =await this.userRepository.query(`select * from users where username = "${userLogin.username}"`)
         if(userFind.length==0){
             user.check=false
             return user
         }else{
           let compare = await  bcrypt.compare(userLogin.password,userFind[0].password)
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
        let userFind = await this.userRepository.query(`select * from users where username = '${userRegister.username}'`);
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
      let newUser =  await this.userRepository.save(user);
        return newUser
    }
    updateCheckBegin = async (idUser)=>{
          this.userRepository.query(`update users set checkBegin = true where idUser =${idUser}`)
    }
    checkLoginFb = async (userFb)=>{
        let userFind = await this.userRepository.query(`select * from users where username = '${userFb.username}'`);
        let check;
        if (userFind.length !== 0) {
            check = true
        } else {
            userFb.password = await bcrypt.hash(userFb.password, 10)
            check = false
        }
        return check
    }
    updateUser =async (editUser,idUser)=>{
        await this.userRepository.update({idUser:idUser},editUser)
    }
    findUserById = async (idUser)=>{
     let user =  await this.userRepository.findOneById(idUser)
        return user
    }
}