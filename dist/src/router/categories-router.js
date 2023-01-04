"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = exports.router = void 0;
const express_1 = require("express");
const category_controller_1 = __importDefault(require("../controller/category-controller"));
exports.router = (0, express_1.Router)();
exports.categoryRouter = (0, express_1.Router)();
exports.categoryRouter.get('/', category_controller_1.default.showCategory);
exports.categoryRouter.post('/', category_controller_1.default.saveCategory);
exports.categoryRouter.put('/edit-category', category_controller_1.default.updateCategory);
exports.categoryRouter.delete('/delete/:idCategory', category_controller_1.default.removeCategory);
//# sourceMappingURL=categories-router.js.map