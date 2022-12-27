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
    }
}
export default new UserController()