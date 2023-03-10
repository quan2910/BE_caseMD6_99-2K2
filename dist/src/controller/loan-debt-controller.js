"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loan_debt_service_1 = require("../service/loan-debt-service");
class LoanDebtController {
    constructor() {
        this.showLoanDebt = async (req, res) => {
            let loanDebts = await this.loanDebtService.getLoanDebt();
            return res.status(200).json(loanDebts);
        };
        this.showLoanDebtDetail = async (req, res) => {
            let idWallet = req.params.idWallet;
            let loanDebtDetail = await this.loanDebtService.getLoanDebtDetail(idWallet);
            return res.json(loanDebtDetail);
        };
        this.createLoanDebt = async (req, res) => {
            try {
                let loanDebt = req.body;
                await this.loanDebtService.create(loanDebt);
                res.json({
                    mess: "create success",
                    data: loanDebt
                });
            }
            catch (e) {
                console.log(e);
            }
        };
        this.updateLoanDebt = async (req, res) => {
            try {
                let loanDebtEdit = req.body;
                await this.loanDebtService.updateLoanDebt(loanDebtEdit.idLoanDebt, loanDebtEdit);
                res.status(200).json({
                    mess: "edit success"
                });
            }
            catch (e) {
                console.log(e);
            }
        };
        this.deleteLoanDebt = async (req, res) => {
            try {
                let idLoanDebt = req.params.idLoanDebt;
                await this.loanDebtService.deleteLoanDebt(idLoanDebt);
                res.status(201).json({
                    mess: "delete success"
                });
            }
            catch (e) {
                console.log(e);
            }
        };
        this.loanDebtService = new loan_debt_service_1.LoanDebtService();
    }
}
exports.default = new LoanDebtController();
//# sourceMappingURL=loan-debt-controller.js.map