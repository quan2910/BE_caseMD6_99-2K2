"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../service/user-service");
class UserController {
    constructor() {
        this.showUser = async (req, res) => {
            let users = await this.userService.getAll();
        };
        this.userService = new user_service_1.UserService();
    }
}
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map