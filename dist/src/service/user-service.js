"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const data_source_1 = require("../data-source");
const user_1 = require("../model/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
class UserService {
    constructor() {
        this.getAll = async () => {
            let users = await this.userRepository.find();
            return users;
        };
        this.checkLogin = async (userLogin) => {
            let user = {
                check: false,
                token: "",
                authenticUser: false,
                username: "",
                idUser: 0
            };
            let userFind = await this.userRepository.query(`select * from users where username = "${userLogin.username}"`);
            console.log(userFind);
            if (userFind.length == 0) {
                user.check = false;
                return user;
            }
            else {
                let compare = await bcrypt_1.default.compare(userLogin.password, userFind[0].password);
                if (!compare) {
                    user.check = false;
                    return user;
                }
                if (compare) {
                    let payload = { username: userFind[0].username };
                    let token = await jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                        expiresIn: 36000
                    });
                    user.token = token;
                    user.check = true;
                    user.username = userFind[0].username;
                    user.idUser = userFind[0].idUser;
                    return user;
                }
            }
        };
        this.checkRegister = async (userRegister) => {
            let userFind = await this.userRepository.query(`select * from users where username = '${userRegister.username}'`);
            let check;
            if (userFind.length !== 0) {
                check = true;
            }
            else {
                userRegister.password = await bcrypt_1.default.hash(userRegister.password, 10);
                check = false;
            }
            return check;
        };
        this.createUser = async (user) => {
            await this.userRepository.save(user);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            console.log('Connected Database');
            this.userRepository = connection.getRepository(user_1.User);
        });
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user-service.js.map