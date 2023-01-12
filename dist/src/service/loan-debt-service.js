"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanDebtService = void 0;
const data_source_1 = require("../data-source");
const loan_debt_1 = require("../model/loan-debt");
class LoanDebtService {
    constructor() {
        this.create = async (loanDebt) => {
            await this.loanDebtRepo.save(loanDebt);
        };
        this.getLoanDebt = async () => {
            let loanDebts = await this.loanDebtRepo.query(`select * from loan_debt join category_loan_debt on loan_debt.idCategoryLoanDebt = category_loan_debt.idCategoryLoanDebt`);
            return loanDebts;
        };
        this.getLoanDebtDetail = async (idWallet) => {
            let loanDebtDetail = await this.loanDebtRepo.query(`select * from loan_debt join category_loan_debt on loan_debt.idCategoryLoanDebt = category_loan_debt.idCategoryLoanDebt  where idWallet = ${+idWallet}`);
            return loanDebtDetail;
        };
        this.updateLoanDebt = async (idLoanDebt, updateLoanDebt) => {
            await this.loanDebtRepo.update({ idLoanDebt: idLoanDebt }, updateLoanDebt);
        };
        this.deleteLoanDebt = async (idLoanDebt) => {
            this.loanDebtRepo.delete(idLoanDebt);
        };
        this.loanDebtRepo = data_source_1.AppDataSource.getRepository(loan_debt_1.LoanDebt);
    }
}
exports.LoanDebtService = LoanDebtService;
//# sourceMappingURL=loan-debt-service.js.map