import {Router} from "express";
import transactionController from "../controller/transaction-controller";

export const router = Router();

export const transactionRouter = Router();
transactionRouter.get("/",transactionController.showTransactions)
transactionRouter.post('/',transactionController.saveTransaction)
transactionRouter.delete('/delete-transaction/:id',transactionController.deleteTransaction)
transactionRouter.put('/edit-transactions',transactionController.updateTransaction)