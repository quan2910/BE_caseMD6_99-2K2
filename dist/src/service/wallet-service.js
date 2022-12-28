"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletService = void 0;
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
        this.getWalletDetail = async (idUser) => {
            let wallets = await this.walletRepository.query(`select * from wallet where userId =${+idUser}  && status = 1`);
            let transactions = await this.walletRepository.query(`select * from transaction where walletId =${+wallets[0].idWallet}`);
            let walletHome = {
                wallet: wallets,
                transactions: transactions
            };
            return walletHome;
        };
        this.walletRepository = data_source_1.AppDataSource.getRepository(wallet_1.Wallet);
    }
}
exports.WalletService = WalletService;
exports.default = new WalletService();
//# sourceMappingURL=wallet-service.js.map