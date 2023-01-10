import {AppDataSource} from "../data-source";
import {Request, Response} from "express";
import {LoanDebt} from "../model/loan-debt";
export class LoanDebtService {
    loanDebtRepo: any
    constructor() {
        this.loanDebtRepo = AppDataSource.getRepository(LoanDebt)
    }

    create = async (loanDebt)=> {
      await this.loanDebtRepo.save(loanDebt)
    }

    getLoanDebt = async ()=>{
        let loanDebts = await this.loanDebtRepo.query(`select * from loan_debt join category_loan_debt on loan_debt.idCategoryLoanDebt = category_loan_debt.idCategoryLoanDebt`)
        return loanDebts
    }

    getLoanDebtDetail = async (idWallet)=>{
        let loanDebtDetail =await this.loanDebtRepo.query(`select * from loan_debt join category_loan_debt on loan_debt.idCategoryLoanDebt = category_loan_debt.idCategoryLoanDebt  where idWallet = ${+idWallet}`)
        return loanDebtDetail
    }
    updateLoanDebt = async (idLoanDebt ,updateLoanDebt)=> {
        await this.loanDebtRepo.update({idLoanDebt: idLoanDebt}, updateLoanDebt)
    }

    deleteLoanDebt = async (idLoanDebt)=>{
        this.loanDebtRepo.delete(idLoanDebt)
    }
}