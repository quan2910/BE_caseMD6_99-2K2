"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const data_source_1 = require("../data-source");
const user_1 = require("../model/user");
class UserService {
    constructor() {
        data_source_1.AppDataSource.initialize().then(connection => {
            console.log('Connected Database');
            this.userService = connection.getRepository(user_1.User);
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user-service.js.map