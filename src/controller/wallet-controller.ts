import {Request, Response} from "express";
import WalletService from "../service/wallet-service";


class WalletController {

    showAll = async (req: Request, res: Response) => {
        let wallets = await WalletService.findAll()
        return res.status(200).json(wallets);
    }

    createWallet = async (req: Request, res: Response) => {
        try {
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
}

export default new WalletController();