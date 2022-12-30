import {Request, Response} from "express";
import {UserService} from "../service/user-service";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {UploadedFile} from "express-fileupload";

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
    changeCheckBegin =async (req:Request,res:Response)=>{
       try {
           let {id} = req.params
           await this.userService.updateCheckBegin(id)
           res.json({mess:"thành công"})
       }catch (e) {
           res.json(e.message)
       }

    }
  loginFB = async (req:Request,res:Response)=>{
       try {
           let checkRegister = await this.userService.checkLoginFb(req.body);
           if (checkRegister) {
               await this.login(req,res)

           } else {
             let newUser=  await this.userService.createUser(req.body);
               let user = {check:true,authenticUser:[]}
               user.authenticUser.push(newUser)
               await res.json({user :user})


           }
       }catch (e) {
           console.log(e.message)
       }
  }
  updateProfile =async (req:Request,res:Response)=>{
        let profileEdit = req.body
      await this.userService.updateUser(profileEdit,profileEdit.idUser)
      res.json({mess:"thành công"})
  }
  searchById = async (req:Request,res:Response)=>{
     try{
         let idUser = req.params.id
         let user =await this.userService.findUserById(idUser)
         let a = {authenticUser: []}
         a.authenticUser.push(user)
         res.json({user:a})
     }catch (e) {
         console.log(e.message)
     }

  }
  saveAvatar  = async (req:Request,res:Response)=>{
      let {idUser}=req.body
     let file = req.files
      if (file) {
          let image = file.File as UploadedFile
          image.mv('./public/upload/' + image.name)
          let nameImage = 'http://localhost:3000/upload/' + image.name
          await this.userService.updateUser({avatar:nameImage},idUser)
      }
  }
    changePassword = async (req: Request, res: Response) => {
        let user = await this.userService.checkChangePassword(req.params.id, req.body.oldPassword, req.body.newPassword)
        if(!user.check) {
            res.json({
                user,
                mess: "Mat khau hien tai khong dung"
            })
        } else {
            res.json({
                user,
                mess: "Doi mat khau thanh cong"
            })
        }
    }
}
export default new UserController()