export declare class UserService {
    userRepository: any;
    constructor();
    getAll: () => Promise<any>;
    checkLogin: (userLogin: any) => Promise<{
        check: boolean;
        token: string;
        authenticUser: boolean;
        username: string;
        userId: number;
    }>;
    checkRegister: (userRegister: any) => Promise<any>;
    createUser: (user: any) => Promise<void>;
}
