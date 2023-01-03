"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_service_1 = require("../service/category-service");
class CategoryController {
    constructor() {
        this.saveCategory = async (req, res) => {
            try {
                let category = req.body;
                await this.categoryService.createCategory(category);
                res.json({
                    mess: "thành công"
                });
            }
            catch (e) {
                res.json(e.message);
            }
        };
        this.showCategory = async (req, res) => {
            try {
                let categories = await this.categoryService.getCategory();
                res.json(categories);
            }
            catch (e) {
                res.json(e.message);
            }
        };
        this.updateCategory = async (req, res) => {
            try {
                let categoryEdit = req.body;
                console.log(categoryEdit);
                let category = await this.categoryService.upDateCategory(categoryEdit.idCategory, categoryEdit);
                res.json(category);
            }
            catch (e) {
                res.json(e.message);
            }
        };
        this.categoryService = new category_service_1.CategoryService();
    }
}
exports.CategoryController = CategoryController;
exports.default = new CategoryController();
//# sourceMappingURL=category-controller.js.map