import {AppDataSource} from "../data-source";
import {User} from "../model/user"

export class UserService {
    private userService: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log('Connected Database')
            this.userService = connection.getRepository(User)
        })
    }
}