import {LimitService} from "../service/limit-service";
import {Request, Response} from "express";

export class LimitController {
    limitService: LimitService

    constructor() {
        this.limitService = new LimitService()
    }

    showAll = async (req: Request, res: Response) => {
            let limit = await this.limitService.findAll()
            return res.status(200).json(limit)
    }
    create = async (req: Request, res:Response) => {
        try{
            let limit = await this.limitService.create(req.body)
            return res.status(200).json({
                limit: limit,
                mess: 'Limit Success !!'
            })
        }
        catch (e){
            res.json({
                err:e.mess
            })
        }
    }
    update = async (req: Request, res: Response) => {
        try {
            let limit = await this.limitService.edit(req,res)
            res.json(limit)
        } catch (e) {
            res.json(e.message)
        }
    }

    remove = async (req: Request, res: Response) => {
        try {
            let limit = await this.limitService.delete(req, res);
            return res.json({mess:"delete success", limit: limit})
        } catch (e) {
            res.json(e.message)
        }
    }
}

export default new LimitController()