import { Request, Response } from "express";
import { UserService } from "../service/user-service";
declare class WalletController {
    userService: UserService;
    constructor();
    showAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createWallet: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    removeWallet: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    editWallet: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showWalletDetail: (req: Request, res: Response) => Promise<void>;
    showTransactionByMonth: (req: Request, res: Response) => Promise<void>;
    showTransactionByDate: (req: Request, res: Response) => Promise<void>;
    showTransactionByOnlyMonth: (req: Request, res: Response) => Promise<void>;
}
declare const _default: WalletController;
export default _default;
