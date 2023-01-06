"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moneyTypeRouter = exports.router = void 0;
const express_1 = require("express");
const moneyType_controller_1 = __importDefault(require("../controller/moneyType-controller"));
exports.router = (0, express_1.Router)();
exports.moneyTypeRouter = (0, express_1.Router)();
exports.moneyTypeRouter.get('/', moneyType_controller_1.default.showAll);
//# sourceMappingURL=moneyType-router.js.map