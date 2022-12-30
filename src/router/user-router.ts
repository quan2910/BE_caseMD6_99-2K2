import {Router} from "express";

export const router = Router();
import userController from "../controller/user-controller";

export const userRouter = Router();

userRouter.get("/",userController.showUser);
userRouter.post("/login",userController.login)
userRouter.post("/register",userController.register)
userRouter.get("/change-check-begin/:id",userController.changeCheckBegin)
userRouter.post("/loginFB",userController.loginFB)
userRouter.post("/change-password/:id",userController.changePassword)
userRouter.put("/profile",userController.updateProfile)
userRouter.get("/find-by-id/:id",userController.searchById)
userRouter.post("/avatar",userController.saveAvatar)

