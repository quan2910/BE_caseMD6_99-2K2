"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const wallet_1 = require("../model/wallet");
class WalletService {
    constructor() {
        this.findAll = async () => {
            let wallets = await this.walletRepository.find();
            return wallets;
        };
        this.create = async (wallet) => {
            return await this.walletRepository.save(wallet);
        };
        this.delete = async (req, res) => {
            let idWallet = req.params.idWallet;
            await this.walletRepository.delete(idWallet);
            res.status(201).json({
                mess: 'Delete Success !!'
            });
        };
        this.edit = async (req, res) => {
            let idWallet = +req.params.idWallet;
            let newWallet = req.body;
            let wallets = await this.walletRepository.update({ idWallet: idWallet }, newWallet);
            return wallets;
        };
        this.findByIdUser = async (req, res) => {
            let userId = +req.params.userId;
            let wallets = await this.walletRepository.findBy({ userId: userId });
            return wallets;
        };
        this.walletRepository = data_source_1.AppDataSource.getRepository(wallet_1.Wallet);
    }
}
exports.default = new WalletService();
//# sourceMappingURL=wallet-service.js.map