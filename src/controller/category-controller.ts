import {CategoryService} from "../service/category-service";
import {Request, Response} from "express";

export class CategoryController{
    categoryService : CategoryService
    constructor() {
        this.categoryService = new CategoryService()
    }
    saveCategory = async (req:Request,res:Response)=>{
       try {
           let category = req.body
           await this.categoryService.createCategory(category)
           res.json({
               mess:"thành công"
           })
       }catch (e) {
           res.json(e.message)
       }

    }
    showCategory = async (req:Request,res:Response)=>{
        try {
            let categories = await this.categoryService.getCategory()
            res.json(categories)


        }catch (e) {
            res.json(e.message)
        }
    }

}
export default new CategoryController()