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
           return res.status(200).json(users)
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
    edit = async (req: Request, res: Response) => {
        try{
            let edit = await this.userService.edit(req, res);
            console.log('edit', edit)
            return res.status(200).json({
                edit,
                mess : "edit thanh cong"
            })
        } catch (e) {
            res.json( {
                err: e.mess
            })
        }
    }
    changePassword = async (req: Request, res: Response) => {
        let user = await this.userService.checkChangePassword(req.params.id, req.body.oldPassword, req.body.newPassword)
        if(!user.check) {
            res.json({
                user,
                mess: "mk cu khong dung"
            })
        } else {
            res.json({
                user,
                mess:"doi mk thanh cong"
            })
        }
    }
}
export default new UserController()