"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moneyTypeRouter = void 0;
const express_1 = require("express");
const money_type_controller_1 = __importDefault(require("../controller/money-type-controller"));
exports.moneyTypeRouter = (0, express_1.Router)();
exports.moneyTypeRouter.post('/add', money_type_controller_1.default.addMoneyType);
exports.moneyTypeRouter.get('', money_type_controller_1.default.getAllMoneyType);
//# sourceMappingURL=money-type-router.js.map