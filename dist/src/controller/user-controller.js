"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../service/user-service");
class UserController {
    constructor() {
        this.showUser = async (req, res) => {
            let users = await this.userService.getAll();
            return res.status(200).json(users);
        };
        this.register = async (req, res) => {
            let user = await this.userService.save(req.body);
            res.status(200).json(user);
        };
        this.userService = new user_service_1.UserService();
    }
}
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map