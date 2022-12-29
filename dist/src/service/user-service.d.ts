import { Request, Response } from "express";
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
    edit: (req: Request, res: Response) => Promise<any>;
    checkChangePassword: (idUser: any, oldPassword: any, newPassword: any) => Promise<{
        check: boolean;
        userFind: string;
    }>;
}
