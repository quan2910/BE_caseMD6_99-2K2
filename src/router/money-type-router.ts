import {Router} from "express";
import moneyTypeController from "../controller/money-type-controller";

export const moneyTypeRouter = Router()
moneyTypeRouter.post('/add', moneyTypeController.addMoneyType)
moneyTypeRouter.get('', moneyTypeController.getAllMoneyType)