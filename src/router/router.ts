import {Router} from "express";
import {userRouter} from "./user-router";
import {categoryRouter} from "./categories-router";
import {transactionRouter} from "./transaction-router";
import {walletRouter} from "./wallet-router";


export const router = Router();
router.use('/users', userRouter);
router.use('/categories',categoryRouter)
router.use('/transactions',transactionRouter)
router.use('/wallet',walletRouter);