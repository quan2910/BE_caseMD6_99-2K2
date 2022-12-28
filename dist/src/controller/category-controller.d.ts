import { CategoryService } from "../service/category-service";
import { Request, Response } from "express";
export declare class CategoryController {
    categoryService: CategoryService;
    constructor();
    saveCategory: (req: Request, res: Response) => Promise<void>;
    showCategory: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CategoryController;
export default _default;
