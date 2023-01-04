import {AppDataSource} from "../data-source";
import {Category} from "../model/category";
import {Request, Response} from "express";

export class CategoryService{
     categoryRepo :any
    constructor() {
      this.categoryRepo=  AppDataSource.getRepository(Category)
    }
    createCategory = async (category)=>{
       await this.categoryRepo.save(category)
    }
    getCategory = async ()=>{
         let categories = await this.categoryRepo.find()
        return categories
    }
    findOneCategoryById = async (idCategory) => {
         let category = await this.categoryRepo.findOneById(idCategory)
        return category
    }
    upDateCategory = async (idCategory, editCategory)=> {
         await this.categoryRepo.update({idCategory: idCategory}, editCategory)
    }
    deleteCategory = async (req: Request, res: Response) => {
        let idCategory = req.params.idCategory;
        await this.categoryRepo.delete(idCategory)
    }
}