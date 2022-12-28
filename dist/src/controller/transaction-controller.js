"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionController = void 0;
const transaction_service_1 = require("../service/transaction-service");
class TransactionController {
    constructor() {
        this.saveTransaction = async (req, res) => {
            let transaction = req.body;
            await this.transactionService.createTransaction(transaction);
            res.json({
                mess: "thành công"
            });
        };
        this.showTransactions = async (req, res) => {
            try {
                let transaction = await this.transactionService.getTransactions();
                res.json(transaction);
            }
            catch (e) {
            }
        };
        this.transactionService = new transaction_service_1.TransactionService();
    }
}
exports.TransactionController = TransactionController;
exports.default = new TransactionController();
//# sourceMappingURL=transaction-controller.js.map