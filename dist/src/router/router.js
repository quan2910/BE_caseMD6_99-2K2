"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_router_1 = require("./user-router");
const categories_router_1 = require("./categories-router");
const transaction_router_1 = require("./transaction-router");
const wallet_router_1 = require("./wallet-router");
const moneyType_router_1 = require("./moneyType-router");
const limit_router_1 = require("./limit-router");
exports.router = (0, express_1.Router)();
exports.router.use('/users', user_router_1.userRouter);
exports.router.use('/categories', categories_router_1.categoryRouter);
exports.router.use('/transactions', transaction_router_1.transactionRouter);
exports.router.use('/wallet', wallet_router_1.walletRouter);
exports.router.use('/money-type', moneyType_router_1.moneyTypeRouter);
exports.router.use('/limits', limit_router_1.limitRouter);
//# sourceMappingURL=router.js.map