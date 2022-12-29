import { Request, Response } from "express";
declare class WalletService {
    private walletRepository;
    constructor();
    findAll: () => Promise<any>;
    create: (wallet: any) => Promise<any>;
    delete: (req: Request, res: Response) => Promise<void>;
    edit: (req: Request, res: Response) => Promise<any>;
    getWalletDetail: (idUser: any) => Promise<{
        wallet: any;
        transactions: any;
    }>;
    findByIdUser: (req: Request, res: Response) => Promise<any>;
}
declare const _default: WalletService;
export default _default;
