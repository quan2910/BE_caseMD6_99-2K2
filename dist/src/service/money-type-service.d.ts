import { Request, Response } from "express";
export declare class MoneyTypeService {
    moneyTypeRepository: any;
    constructor();
    addMoneyType: (req: Request, res: Response) => Promise<any>;
    findAllMoneyType: () => Promise<any>;
}
