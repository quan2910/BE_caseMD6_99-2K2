import {Router} from "express";

export const router = Router();
import userController from "../controller/user-controller";

export const userRouter = Router();
userRouter.get("/",userController.showUser)