import {Router} from "express";
import {userRouter} from "./user-router";
import {moneyTypeRouter} from "./money-type-router";


export const router = Router();
router.use('/users', userRouter);
router.use('/money-type', moneyTypeRouter)