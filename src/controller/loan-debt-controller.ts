import {LoanDebtService} from "../service/loan-debt-service";
import {Request, Response} from "express";

class LoanDebtController {
    private loanDebtService: LoanDebtService

    constructor() {
        this.loanDebtService = new LoanDebtService()
    }

    showLoanDebt = async (req: Request, res: Response)=> {
        let loanDebts = await this.loanDebtService.getLoanDebt()
        return res.status(200).json(loanDebts)
    }

    showLoanDebtDetail = async (req: Request, res: Response)=> {
        let idWallet = req.params.idWallet
        let loanDebtDetail = await this.loanDebtService.getLoanDebtDetail(idWallet)
        return res.json(loanDebtDetail)
    }
    createLoanDebt = async (req: Request, res: Response)=> {
        try{
            let loanDebt = req.body
            await this.loanDebtService.create(loanDebt)
            res.json({
                mess:"create success",
                data: loanDebt
            })
        }catch (e) {
            console.log(e)
        }
    }
    updateLoanDebt = async (req: Request, res: Response)=> {
        try{
            let loanDebtEdit = req.body;
            await this.loanDebtService.updateLoanDebt( loanDebtEdit.idLoanDebt, loanDebtEdit)
            res.status(200).json({
                mess:"edit success"
            })
        }catch (e){
            console.log(e)
        }
    }

    deleteLoanDebt = async (req: Request, res: Response)=> {
        try{
            let idLoanDebt = req.params.idLoanDebt;
            await this.loanDebtService.deleteLoanDebt(idLoanDebt);
            res.status(201).json({
                mess: "delete success"
            })
        }catch (e){
            console.log(e)
        }
    }
}
export default new LoanDebtController()