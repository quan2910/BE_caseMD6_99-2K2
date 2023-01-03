import { Request, Response } from "express";
import { MoneyTypeService } from "../service/moneyType-service";
export declare class MoneyTypeController {
    moneyTypeService: MoneyTypeService;
    constructor();
    showAll: (req: Request, res: Response) => Promise<void>;
}
declare const _default: MoneyTypeController;
export default _default;
