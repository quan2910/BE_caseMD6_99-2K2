import {MoneyTypeService} from "../service/money-type-service";
import {Request, Response} from "express";

class MoneyTypeController {
    private moneyTypeService: MoneyTypeService
    constructor() {
        this.moneyTypeService = new MoneyTypeService();
    }

    addMoneyType = async (req: Request, res: Response) => {
        let moneyType = await this.moneyTypeService.addMoneyType(req,res);
        return res.status(200).json(moneyType)
    }

    getAllMoneyType = async (req: Request, res: Response) => {
        let moneyTypes = await this.moneyTypeService.findAllMoneyType();
        return res.status(200).json(moneyTypes)
    }
}
export default new MoneyTypeController();