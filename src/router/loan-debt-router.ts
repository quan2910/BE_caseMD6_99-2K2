import {Router} from "express";
import loanDebtController from "../controller/loan-debt-controller";

export const router = Router();

export const loanDebtRouter = Router();
loanDebtRouter.get('/',loanDebtController.showLoanDebt);
loanDebtRouter.get('/detail-loan-debt/:idWallet',loanDebtController.showLoanDebtDetail);
loanDebtRouter.post('/',loanDebtController.createLoanDebt);
loanDebtRouter.put('/edit-loan-debt',loanDebtController.updateLoanDebt);
loanDebtRouter.delete('/delete/:idLoanDebt',loanDebtController.deleteLoanDebt);
