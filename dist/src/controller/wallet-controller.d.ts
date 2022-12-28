import { Request, Response } from "express";
declare class WalletController {
    showAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createWallet: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    removeWallet: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    editWallet: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: WalletController;
export default _default;