"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionController = void 0;
const transaction_service_1 = require("../service/transaction-service");
class TransactionController {
    constructor() {
        this.saveTransaction = async (req, res) => {
            let transaction = req.body;
            console.log(transaction);
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
        this.deleteTransaction = async (req, res) => {
            try {
                let idTransaction = req.params.id;
                await this.transactionService.deleteTransaction(idTransaction);
                res.json({ mess: "thành công" });
            }
            catch (e) {
                res.json({ mess: "haha" });
            }
        };
        this.updateTransaction = async (req, res) => {
            try {
                let transactionEdit = req.body;
                console.log(transactionEdit);
                await this.transactionService.updateTransactions(transactionEdit, transactionEdit.idTransaction);
                res.json({ mess: "thành công" });
            }
            catch (e) {
                console.log(e);
            }
        };
        this.transactionService = new transaction_service_1.TransactionService();
    }
}
exports.TransactionController = TransactionController;
exports.default = new TransactionController();
//# sourceMappingURL=transaction-controller.js.map