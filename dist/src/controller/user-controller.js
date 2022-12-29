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
        this.edit = async (req, res) => {
            try {
                let edit = await this.userService.edit(req, res);
                console.log('edit', edit);
                return res.status(200).json({
                    edit,
                    mess: "edit thanh cong"
                });
            }
            catch (e) {
                res.json({
                    err: e.mess
                });
            }
        };
        this.changePassword = async (req, res) => {
            let user = await this.userService.checkChangePassword(req.params.id, req.body.oldPassword, req.body.newPassword);
            if (!user.check) {
                res.json({
                    user,
                    mess: "mk cu khong dung"
                });
            }
            else {
                res.json({
                    user,
                    mess: "doi mk thanh cong"
                });
            }
        };
        this.userService = new user_service_1.UserService();
    }
}
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map