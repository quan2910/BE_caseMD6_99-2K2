import {AppDataSource} from "../data-source";
import {Wallet} from "../model/wallet";
import {Request, Response} from "express";

class WalletService {
    private walletRepository: any;

    constructor() {
        this.walletRepository = AppDataSource.getRepository(Wallet)
    }

    findAll = async () => {
        let wallets = await this.walletRepository.find()
        return wallets
    }
    create = async (wallet) => {
        return await this.walletRepository.save(wallet);
    }

    delete = async (req: Request, res: Response) => {
        let idWallet = req.params.idWallet;
        await this.walletRepository.delete(idWallet);
        res.status(201).json({
            mess: 'Delete Success !!'
        })
    }

    edit = async (req:Request,res : Response) => {
        let idWallet = +req.params.idWallet;
        let newWallet = req.body;
        let wallets = await this.walletRepository.update({idWallet:idWallet},newWallet)
        return wallets
    }
}

export default new WalletService();