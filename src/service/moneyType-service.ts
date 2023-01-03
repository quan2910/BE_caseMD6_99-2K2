import {AppDataSource} from "../data-source";

import {MoneyType} from "../model/money-type";

export class MoneyTypeService{
    moneyTypeRepo :any
    constructor() {
        this.moneyTypeRepo = AppDataSource.getRepository(MoneyType)
    }
    getAll = async ()=>{
        let moneyTypes = await this.moneyTypeRepo.find()
        return moneyTypes
    }
}