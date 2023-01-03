export declare class UserService {
    userRepository: any;
    constructor();
    getAll: () => Promise<any>;
    save: (user: any) => Promise<any>;
    checkLogin: (userLogin: any) => Promise<{
        check: boolean;
        token: string;
        authenticUser: boolean;
        username: string;
        userId: number;
    }>;
    checkRegister: (userRegister: any) => Promise<any>;
    createUser: (user: any) => Promise<any>;
    updateCheckBegin: (idUser: any) => Promise<void>;
    checkLoginFb: (userFb: any) => Promise<any>;
    updateUser: (editUser: any, idUser: any) => Promise<void>;
    findUserById: (idUser: any) => Promise<any>;
}
