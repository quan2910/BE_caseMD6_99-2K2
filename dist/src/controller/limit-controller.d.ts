import { LimitService } from "../service/limit-service";
import { Request, Response } from "express";
export declare class LimitController {
    limitService: LimitService;
    constructor();
    showAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    create: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    update: (req: Request, res: Response) => Promise<void>;
    remove: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: LimitController;
export default _default;
