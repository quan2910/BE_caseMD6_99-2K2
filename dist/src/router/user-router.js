"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
const user_controller_1 = __importDefault(require("../controller/user-controller"));
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/", user_controller_1.default.showUser);
exports.userRouter.post("/login", user_controller_1.default.login);
exports.userRouter.post("/register", user_controller_1.default.register);
//# sourceMappingURL=user-router.js.map