import {Router} from "express";

export const router = Router();
import userController from "../controller/user-controller";

export const userRouter = Router();
<<<<<<< HEAD
userRouter.get("/",userController.showUser)
userRouter.post('/register',userController.register);
=======
userRouter.get("/",userController.showUser);
userRouter.post("/login",userController.login)
userRouter.post("/register",userController.register)
>>>>>>> 4db0eeec8b7f4164d411d062208e65e982dd68d0
