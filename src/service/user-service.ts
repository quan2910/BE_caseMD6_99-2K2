import {AppDataSource} from "../data-source";
import {User} from "../model/user"

export class UserService {
    userRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log('Connected Database')
            this.userRepository = connection.getRepository(User)
        })
        this.userRepository = AppDataSource.getRepository(User);
    }

    getAll = async () => {
        let users = await this.userRepository.find()
        return users
    }

}