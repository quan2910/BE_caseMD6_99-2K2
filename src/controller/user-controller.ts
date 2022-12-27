import {Request, Response} from "express";
import {UserService} from "../service/user-service";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class UserController {
    private userService: UserService

    constructor() {
        this.userService = new UserService()
    }
    showUser = async (req:Request,res:Response)=>{
           let users = await this.userService.getAll()
<<<<<<< HEAD
           return res.status(200).json(users)
    }

    register = async (req:Request,res:Response)=>{
        let user = await this.userService.save(req.body)
        res.status(200).json(user)
    }
=======
    }

    login = async (req:Request,res:Response)=>{
        try {
            let user = await this.userService.checkLogin(req.body)
            if(user.check===false){
                res.json({mess:"sai tài khoản"})
            }else {
                res.json({user :user})
            }
        }catch (e) {
            res.json({
                err :e.message
            }
            )
        }
    }

    register = async (req: Request, res: Response) => {
        try {
            let checkRegister = await this.userService.checkRegister(req.body);
            if (checkRegister) {
                res.json({
                    mess: "Tài khoản đã tồn tại"
                })
            } else {
                await this.userService.createUser(req.body);
                res.json({
                    mess: "Tạo tài khoản thành công"
                })
            }
        }catch (e) {
            res.json({
                    err :e.message
                }
            )
        }

    }

>>>>>>> 4db0eeec8b7f4164d411d062208e65e982dd68d0

}
export default new UserController()