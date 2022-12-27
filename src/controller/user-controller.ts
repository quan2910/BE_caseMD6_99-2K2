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

    register = async (req:Request,res:Response)=>{
        let user = await this.userService.save(req.body)
        res.status(200).json(user)
    }

}
export default new UserController()