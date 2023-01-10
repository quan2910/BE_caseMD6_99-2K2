import {TransactionService} from "../service/transaction-service";
import {Request, Response} from "express";

export class TransactionController{
    transactionService : TransactionService
    constructor() {
        this.transactionService = new TransactionService()
    }
    saveTransaction = async (req:Request,res:Response)=>{
        let transaction = req.body
        console.log(transaction)
        await this.transactionService.createTransaction(transaction)
        res.json({
            mess:"thành công"
        })
    }
    showTransactions = async (req:Request,res:Response)=>{
        try {
            let transaction =  await this.transactionService.getTransactions()
            res.json(transaction)

        }catch (e) {

        }
    }
    deleteTransaction =async (req:Request,res:Response)=>{
        try {
            let idTransaction = req.params.id
            await this.transactionService.deleteTransaction(idTransaction)
             res.json({mess:"thành công"})
        }catch (e) {
            res.json({mess:"haha"})
        }
    }
    updateTransaction = async (req: Request, res: Response) => {
        let transactionEdit = req.body
        console.log(transactionEdit)
        await this.transactionService.updateTransactions(transactionEdit, transactionEdit.idTransaction)
        res.json({mess: "thành công"})
    }

}

export default new TransactionController()