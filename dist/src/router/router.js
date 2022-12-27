"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_router_1 = require("./user-router");
const money_type_router_1 = require("./money-type-router");
exports.router = (0, express_1.Router)();
exports.router.use('/users', user_router_1.userRouter);
exports.router.use('/money-type', money_type_router_1.moneyTypeRouter);
//# sourceMappingURL=router.js.map