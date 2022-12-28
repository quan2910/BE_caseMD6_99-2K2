"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const data_source_1 = require("../data-source");
const category_1 = require("../model/category");
class CategoryService {
    constructor() {
        this.createCategory = async (category) => {
            await this.categoryRepo.save(category);
        };
        this.getCategory = async () => {
            let categories = await this.categoryRepo.find();
            return categories;
        };
        this.categoryRepo = data_source_1.AppDataSource.getRepository(category_1.Category);
    }
}
exports.CategoryService = CategoryService;
//# sourceMappingURL=category-service.js.map