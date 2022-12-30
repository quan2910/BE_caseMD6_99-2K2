import {AppDataSource} from "../data-source";
import {Category} from "../model/category";

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
}