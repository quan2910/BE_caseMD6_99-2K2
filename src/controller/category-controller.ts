import {CategoryService} from "../service/category-service";
import {Request, Response} from "express";

export class CategoryController {
    categoryService: CategoryService

    constructor() {
        this.categoryService = new CategoryService()
    }

    saveCategory = async (req: Request, res: Response) => {
        try {
            let category = req.body
            await this.categoryService.createCategory(category)
            res.json({
                mess: "thành công"
            })
        } catch (e) {
            res.json(e.message)
        }

    }
    showCategory = async (req: Request, res: Response) => {
        try {
            let categories = await this.categoryService.getCategory()
            res.json(categories)
        } catch (e) {
            res.json(e.message)
        }
    }
    updateCategory = async (req: Request, res: Response) => {
        try {
            let categoryEdit = req.body
            console.log(categoryEdit)
            let category = await this.categoryService.upDateCategory(categoryEdit.idCategory, categoryEdit)
            res.json(category)
        } catch (e) {
            res.json(e.message)
        }
    }

    removeCategory = async (req: Request, res: Response) => {
        try {
            let category = await this.categoryService.deleteCategory(req, res);
            return res.json({mess:"delete success", category: category})
        } catch (e) {
            res.json(e.message)
        }
    }
}

export default new CategoryController()