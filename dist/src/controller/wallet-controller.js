"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wallet_service_1 = __importDefault(require("../service/wallet-service"));
const wallet_service_2 = __importDefault(require("../service/wallet-service"));
const user_service_1 = require("../service/user-service");
class WalletController {
    constructor() {
        this.showAll = async (req, res) => {
            let wallets = await wallet_service_1.default.findAll();
            return res.status(200).json(wallets);
        };
        this.createWallet = async (req, res) => {
            try {
                await this.userService.updateCheckBegin(req.body.userId);
                let wallet = await wallet_service_1.default.create(req.body);
                return res.status(200).json({
                    wallet: wallet,
                    mess: 'Wallet Success!!!'
                });
            }
            catch (e) {
                res.json({
                    err: e.mess
                });
            }
        };
        this.removeWallet = async (req, res) => {
            try {
                let wallets = await wallet_service_1.default.delete(req, res);
                return res.json(wallets);
            }
            catch (e) {
                res.json({
                    err: e.mess
                });
            }
        };
        this.editWallet = async (req, res) => {
            try {
                let wallets = await wallet_service_1.default.edit(req, res);
                return res.status(200).json({
                    wallet: wallets,
                    mess: 'Edit Wallet Success!'
                });
            }
            catch (e) {
                res.json({
                    err: e.mess
                });
            }
        };
        this.showWalletDetail = async (req, res) => {
            try {
                let idUser = req.params.id;
                let walletHome = await wallet_service_2.default.getWalletDetail(idUser);
                res.json(walletHome);
            }
            catch (e) {
                res.json(e.message);
            }
        };
        this.userService = new user_service_1.UserService();
    }
}
exports.default = new WalletController();
//# sourceMappingURL=wallet-controller.js.map