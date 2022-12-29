"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../service/user-service");
class UserController {
    constructor() {
        this.showUser = async (req, res) => {
            let users = await this.userService.getAll();
            return res.status(200).json(users);
        };
        this.login = async (req, res) => {
            try {
                let user = await this.userService.checkLogin(req.body);
                if (user.check === false) {
                    res.json({ mess: "sai tài khoản" });
                }
                else {
                    res.json({ user: user });
                }
            }
            catch (e) {
                res.json({
                    err: e.message
                });
            }
        };
        this.register = async (req, res) => {
            try {
                let checkRegister = await this.userService.checkRegister(req.body);
                if (checkRegister) {
                    res.json({
                        mess: "Tài khoản đã tồn tại"
                    });
                }
                else {
                    await this.userService.createUser(req.body);
                    res.json({
                        mess: "Tạo tài khoản thành công"
                    });
                }
            }
            catch (e) {
                res.json({
                    err: e.message
                });
            }
        };
        this.changeCheckBegin = async (req, res) => {
            try {
                let { id } = req.params;
                await this.userService.updateCheckBegin(id);
                res.json({ mess: "thành công" });
            }
            catch (e) {
                res.json(e.message);
            }
        };
        this.loginFB = async (req, res) => {
            let checkRegister = await this.userService.checkLoginFb(req.body);
            if (checkRegister) {
                await this.login(req, res);
            }
            else {
                await this.userService.createUser(req.body);
                let user = await this.userService.checkLogin(req.body);
                await res.json({ user: user });
            }
        };
        this.userService = new user_service_1.UserService();
    }
}
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map