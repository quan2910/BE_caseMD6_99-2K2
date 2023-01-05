import { Request, Response } from "express";
export declare class WalletService {
    private walletRepository;
    constructor();
    findAll: () => Promise<any>;
    create: (wallet: any) => Promise<any>;
    delete: (req: Request, res: Response) => Promise<void>;
    edit: (req: Request, res: Response) => Promise<any>;
    findByIdUser: (req: Request, res: Response) => Promise<any>;
    getWalletDetail: (idUser: any) => Promise<{
        wallet: any;
        transactions: any;
    }>;
    findTransactionByTime: (idUser: any, year: any, month: any) => Promise<{
        wallet: any;
        transactions: any;
    }>;
    findTransactionByDate: (idUser: any, fromDate: any, toDate: any) => Promise<{
        wallet: any;
        transactions: any;
    }>;
}
declare const _default: WalletService;
export default _default;
