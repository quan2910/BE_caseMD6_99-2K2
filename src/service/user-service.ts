import {AppDataSource} from "../data-source";
import {User} from "../model/user"

export class UserService {
     userService: any;

    constructor() {
        AppDataSource.initialize().then(connection =>{
            console.log('Connected Database')
            this.userService = connection.getRepository(User)
        })
    }
   getAll =async ()=>{
        let users = await this.userService.find()
       return users
   }

}