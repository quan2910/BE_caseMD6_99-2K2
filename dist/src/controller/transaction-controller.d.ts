import { TransactionService } from "../service/transaction-service";
import { Request, Response } from "express";
export declare class TransactionController {
    transactionService: TransactionService;
    constructor();
    saveTransaction: (req: Request, res: Response) => Promise<void>;
    showTransactions: (req: Request, res: Response) => Promise<void>;
    deleteTransaction: (req: Request, res: Response) => Promise<void>;
    updateTransaction: (req: Request, res: Response) => Promise<void>;
}
declare const _default: TransactionController;
export default _default;
