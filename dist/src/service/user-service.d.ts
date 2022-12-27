export declare class UserService {
    userRepository: any;
    constructor();
    getAll: () => Promise<any>;
<<<<<<< HEAD
    save: (user: any) => Promise<any>;
=======
    checkLogin: (userLogin: any) => Promise<{
        check: boolean;
        token: string;
        authenticUser: boolean;
    }>;
    checkRegister: (userRegister: any) => Promise<any>;
    createUser: (user: any) => Promise<void>;
>>>>>>> 4db0eeec8b7f4164d411d062208e65e982dd68d0
}
