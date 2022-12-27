import {AppDataSource} from "../data-source";
import {Wallet} from "../model/wallet";

export class WalletService {
    walletRepository:any;
    constructor() {
        this.walletRepository = AppDataSource.getRepository(Wallet)
    }

    findAllWallet = async () => {
        return await this.walletRepository.find()
    }
}