"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const data_source_1 = require("../data-source");
const transaction_1 = require("../model/transaction");
class TransactionService {
    constructor() {
        this.createTransaction = async (transaction) => {
            await this.transactionRepo.save(transaction);
        };
        this.getTransactions = async () => {
            let transactions = this.transactionRepo.find();
            return transactions;
        };
        this.deleteTransaction = async (idTransaction) => {
            this.transactionRepo.delete(idTransaction);
        };
        this.transactionRepo = data_source_1.AppDataSource.getRepository(transaction_1.Transaction);
    }
}
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction-service.js.map