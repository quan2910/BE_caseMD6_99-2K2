import {AppDataSource} from "../data-source";
import {MoneyType} from "../model/money-type";
import {Request, Response} from "express";

export class MoneyTypeService {
    moneyTypeRepository: any;

    constructor() {
        this.moneyTypeRepository = AppDataSource.getRepository(MoneyType);
    }

    addMoneyType = async (req: Request, res: Response)=>{
        let moneyType = req.body;
        let moneyTypes = await this.moneyTypeRepository.save(moneyType)
        return moneyTypes
    }

    findAllMoneyType = async ()=>{
        let moneyTypes = await this.moneyTypeRepository.find()
        return moneyTypes
    }
}