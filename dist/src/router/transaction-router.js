"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionRouter = exports.router = void 0;
const express_1 = require("express");
const transaction_controller_1 = __importDefault(require("../controller/transaction-controller"));
exports.router = (0, express_1.Router)();
exports.transactionRouter = (0, express_1.Router)();
exports.transactionRouter.get("/", transaction_controller_1.default.showTransactions);
exports.transactionRouter.post('/', transaction_controller_1.default.saveTransaction);
//# sourceMappingURL=transaction-router.js.map