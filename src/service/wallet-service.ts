import {AppDataSource} from "../data-source";
import {Wallet} from "../model/wallet";
import {Request, Response} from "express";

export class WalletService {
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

    edit = async (req:Request,res:Response) => {
        let idWallet = +req.params.idWallet;
        let newWallet = req.body;
        let wallets = await this.walletRepository.update({idWallet:idWallet},newWallet)
        return wallets
    }
    getWalletDetail = async (idUser)=>{


            let wallets = await this.walletRepository.query(`select * from wallet where userId =${+idUser}  && status = 1`)
            let transactions = await this.walletRepository.query(`select * from transaction join category on idCategory = categoryId where walletId =${+wallets[0].idWallet}`)
            let walletHome = {
                wallet : wallets,
                transactions :transactions
            }
            return walletHome

    }
}

export default new WalletService();