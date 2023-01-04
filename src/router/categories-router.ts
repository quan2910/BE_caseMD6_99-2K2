import {Router} from "express";
import categoryController from "../controller/category-controller";

export const router = Router();

export const categoryRouter = Router();
categoryRouter.get('/',categoryController.showCategory)
categoryRouter.post('/',categoryController.saveCategory)
categoryRouter.put('/edit-category',categoryController.updateCategory)
categoryRouter.delete('/delete/:idCategory',categoryController.removeCategory)