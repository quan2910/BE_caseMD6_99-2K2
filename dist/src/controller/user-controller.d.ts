import { Request, Response } from "express";
declare class UserController {
    private userService;
    constructor();
    showUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    login: (req: Request, res: Response) => Promise<void>;
    register: (req: Request, res: Response) => Promise<void>;
    changeCheckBegin: (req: Request, res: Response) => Promise<void>;
    loginFB: (req: Request, res: Response) => Promise<void>;
    updateProfile: (req: Request, res: Response) => Promise<void>;
    searchById: (req: Request, res: Response) => Promise<void>;
    saveAvatar: (req: Request, res: Response) => Promise<void>;
    changePassword: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
