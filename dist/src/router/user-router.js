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
exports.userRouter.get("/change-check-begin/:id", user_controller_1.default.changeCheckBegin);
exports.userRouter.post("/loginFB", user_controller_1.default.loginFB);
exports.userRouter.put("/profile", user_controller_1.default.updateProfile);
exports.userRouter.get("/find-by-id/:id", user_controller_1.default.searchById);
exports.userRouter.post("/avatar", user_controller_1.default.saveAvatar);
exports.userRouter.post("/change-password/:id", user_controller_1.default.changePassword);
//# sourceMappingURL=user-router.js.map