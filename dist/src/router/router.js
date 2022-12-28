"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_router_1 = require("./user-router");
const categories_router_1 = require("./categories-router");
const transaction_router_1 = require("./transaction-router");
exports.router = (0, express_1.Router)();
exports.router.use('/users', user_router_1.userRouter);
exports.router.use('/categories', categories_router_1.categoryRouter);
exports.router.use('/transactions', transaction_router_1.transactionRouter);
//# sourceMappingURL=router.js.map