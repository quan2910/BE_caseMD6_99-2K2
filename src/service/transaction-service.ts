import {AppDataSource} from "../data-source";
import {Transaction} from "../model/transaction";

export class TransactionService{
    transactionRepo:any
    constructor() {
        this.transactionRepo = AppDataSource.getRepository(Transaction)
    }
    createTransaction = async (transaction)=>{
        await this.transactionRepo.save(transaction)
    }
    getTransactions = async ()=>{
        let transactions = this.transactionRepo.find()
        return transactions
    }
}