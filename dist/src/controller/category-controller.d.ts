import { CategoryService } from "../service/category-service";
import { Request, Response } from "express";
export declare class CategoryController {
    categoryService: CategoryService;
    constructor();
    saveCategory: (req: Request, res: Response) => Promise<void>;
    showCategory: (req: Request, res: Response) => Promise<void>;
    updateCategory: (req: Request, res: Response) => Promise<void>;
    removeCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: CategoryController;
export default _default;
