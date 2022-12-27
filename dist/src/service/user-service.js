"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const data_source_1 = require("../data-source");
const user_1 = require("../model/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    constructor() {
        this.getAll = async () => {
            let users = await this.userRepository.find();
            return users;
        };
        this.save = async (user) => {
            console.log(user);
            let query = `select * from users 
where username = '${user.username}'`;
            let userFind = await this.userRepository.query(query);
            if (userFind.length != 0) {
                return {
                    mess: 'has the same name'
                };
            }
            else {
                user.password = await bcrypt_1.default.hash(user.password, 10);
                return await this.userRepository.save(user);
            }
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