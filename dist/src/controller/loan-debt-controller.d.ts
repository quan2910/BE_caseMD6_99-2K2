import { Request, Response } from "express";
declare class LoanDebtController {
    private loanDebtService;
    constructor();
    showLoanDebt: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showLoanDebtDetail: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createLoanDebt: (req: Request, res: Response) => Promise<void>;
    updateLoanDebt: (req: Request, res: Response) => Promise<void>;
    deleteLoanDebt: (req: Request, res: Response) => Promise<void>;
}
declare const _default: LoanDebtController;
export default _default;
