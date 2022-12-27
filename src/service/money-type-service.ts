import {AppDataSource} from "../data-source";
import {MoneyType} from "../model/money-type";


export class MoneyTypeService {
    moneyTypeRepository: any;

    constructor() {
        this.moneyTypeRepository = AppDataSource.getRepository(MoneyType);
    }

    addMoneyType = async (req:Request,res:Response)=>{
        let moneyType = req.body;
        let moneyTypes = await this.moneyTypeRepository.save(moneyType)
        return moneyTypes
    }

    getAll =async ()=>{
        let moneyType = await this.moneyTypeRepository.find()
        return moneyType
    }
}