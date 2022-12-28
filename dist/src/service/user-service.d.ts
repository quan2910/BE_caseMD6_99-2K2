export declare class UserService {
    userRepository: any;
    constructor();
    getAll: () => Promise<any>;
    save: (user: any) => Promise<any>;
    checkLogin: (userLogin: any) => Promise<{
        check: boolean;
        token: string;
        authenticUser: boolean;
    }>;
    checkRegister: (userRegister: any) => Promise<any>;
    createUser: (user: any) => Promise<void>;
}
