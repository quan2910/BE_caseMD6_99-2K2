"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.limitRouter = exports.router = void 0;
const express_1 = require("express");
const limit_controller_1 = __importDefault(require("../controller/limit-controller"));
exports.router = (0, express_1.Router)();
exports.limitRouter = (0, express_1.Router)();
exports.limitRouter.get("/", limit_controller_1.default.showAll);
exports.limitRouter.post("/", limit_controller_1.default.create);
exports.limitRouter.put("/edit-limit", limit_controller_1.default.update);
exports.limitRouter.delete("/delete/:idLimit", limit_controller_1.default.remove);
//# sourceMappingURL=limit-router.js.map