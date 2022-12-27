import {AppDataSource} from "../data-source";
import {User} from "../model/user"
import bcrypt from 'bcrypt';


export class UserService {
    userRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log('Connected Database')
            this.userRepository = connection.getRepository(User)
        })
        this.userRepository = AppDataSource.getRepository(User);
    }

   getAll =async ()=>{
        let users = await this.userRepository.find()
       return users
   }
   save = async (user) => {
       console.log(user);
        let query = `select * from users 
where username = '${user.username}'`
       let userFind = await this.userRepository.query(query);

        if (userFind.length != 0 ){
            return {
                mess: 'has the same name'
            }
        }else {
            user.password = await bcrypt.hash(user.password,10)
            return await this.userRepository.save(user)
        }
   }

}