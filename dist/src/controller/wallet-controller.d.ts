import { Request, Response } from "express";
declare class WalletController {
    showAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createWallet: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    removeWallet: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    editWallet: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showWalletByIdUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showWalletDetail: (req: Request, res: Response) => Promise<void>;
}
declare const _default: WalletController;
export default _default;
