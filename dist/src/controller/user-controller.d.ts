import { Request, Response } from "express";
declare class UserController {
    private userService;
    constructor();
<<<<<<< HEAD
    showUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
=======
    showUser: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
>>>>>>> 4db0eeec8b7f4164d411d062208e65e982dd68d0
    register: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
