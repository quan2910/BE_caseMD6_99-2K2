import { Request, Response } from "express";
export declare class LimitService {
    private limitRepository;
    constructor();
    findAll: () => Promise<any>;
    create: (limit: any) => Promise<any>;
    delete: (req: Request, res: Response) => Promise<void>;
    edit: (req: Request, res: Response) => Promise<any>;
    findByIdWallet: (req: Request, res: Response) => Promise<any>;
}
declare const _default: LimitService;
export default _default;
