import {Router} from "express";
import categoryController from "../controller/category-controller";
import moneyTypeController from "../controller/moneyType-controller";

export const router = Router();

export const moneyTypeRouter = Router();
moneyTypeRouter.get('/',moneyTypeController.showAll)
