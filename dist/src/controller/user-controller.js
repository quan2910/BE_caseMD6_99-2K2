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
            try {
                let checkRegister = await this.userService.checkLoginFb(req.body);
                if (checkRegister) {
                    await this.login(req, res);
                }
                else {
                    let newUser = await this.userService.createUser(req.body);
                    let user = { check: true, authenticUser: [] };
                    user.authenticUser.push(newUser);
                    await res.json({ user: user });
                }
            }
            catch (e) {
                console.log(e.message);
            }
        };
        this.changePassword = async (req, res) => {
            let user = await this.userService.checkChangePassword(req.params.id, req.body.oldPassword, req.body.newPassword);
            if (!user.check) {
                res.json({
                    user,
                    mess: "Mat khau hien tai khong dung"
                });
            }
            else {
                res.json({
                    user,
                    mess: "Doi mat khau thanh cong"
                });
            }
        };
        this.updateProfile = async (req, res) => {
            let profileEdit = req.body;
            await this.userService.updateUser(profileEdit, profileEdit.idUser);
            res.json({ mess: "thành công" });
        };
        this.searchById = async (req, res) => {
            let idUser = req.params.id;
            let user = await this.userService.findUserById(idUser);
            let a = { authenticUser: [] };
            a.authenticUser.push(user);
            res.json({ user: a });
        };
        this.saveAvatar = async (req, res) => {
            let { idUser } = req.body;
            let file = req.files;
            if (file) {
                let image = file.File;
                image.mv('./public/upload/' + image.name);
                let nameImage = 'http://localhost:3000/upload/' + image.name;
                await this.userService.updateUser({ avatar: nameImage }, idUser);
            }
        };
        this.userService = new user_service_1.UserService();
    }
}
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map