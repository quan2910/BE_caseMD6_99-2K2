import { Request, Response } from "express";
declare class MoneyTypeController {
    private moneyTypeService;
    constructor();
    addMoneyType: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getAllMoneyType: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: MoneyTypeController;
export default _default;
