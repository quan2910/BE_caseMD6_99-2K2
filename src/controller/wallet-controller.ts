import {Request, Response} from "express";
import WalletService from "../service/wallet-service";
import walletService from "../service/wallet-service";
import {UserService} from "../service/user-service";


class WalletController {
     userService :UserService
    constructor() {
         this.userService = new UserService()
    }
    showAll = async (req: Request, res: Response) => {
        let wallets = await WalletService.findAll()
        return res.status(200).json(wallets);
    }

    createWallet = async (req: Request, res: Response) => {
        try {

           await this.userService.updateCheckBegin(req.body.userId)
            let wallet = await WalletService.create(req.body)
            return res.status(200).json({
                wallet: wallet,
                mess: 'Wallet Success!!!'
            })
        } catch (e) {
            res.json({
                    err: e.mess
                }
            )
        }
    }

    removeWallet = async (req: Request, res: Response) => {
        try {
            let wallets = await WalletService.delete(req, res);
            return res.json(wallets)
        } catch (e) {
            res.json({
                    err: e.mess
                }
            )
        }

    }

    editWallet = async (req: Request, res: Response) => {
        try {
            let wallets = await WalletService.edit(req, res);
            return res.status(200).json({
                wallet: wallets,
                mess: 'Edit Wallet Success!'
            })
        } catch (e) {
            res.json({
                    err: e.mess
                }
            )
        }

    }
    showWalletDetail = async (req:Request,res:Response)=>{

        try{
            let idUser = req.params.id
            let walletHome =  await walletService.getWalletDetail(idUser)
            res.json(walletHome)
        }catch (e) {
            res.json(e.message)
        }
    }
}
export default new WalletController()