
import {Request, Response} from "express";
import {MoneyTypeService} from "../service/moneyType-Service";

export class MoneyTypeController{
   moneyTypeService:MoneyTypeService
    constructor() {
        this.moneyTypeService = new MoneyTypeService()
    }

    showAll = async (req:Request,res:Response)=>{
        try {
            let moneyTypes = await this.moneyTypeService.getAll()
            res.json(moneyTypes)


        }catch (e) {
            res.json(e.message)
        }
    }

}
export default new MoneyTypeController();