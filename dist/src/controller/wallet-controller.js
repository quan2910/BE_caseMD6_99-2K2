"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wallet_service_1 = __importDefault(require("../service/wallet-service"));
class WalletController {
    constructor() {
        this.showAll = async (req, res) => {
            let wallets = await wallet_service_1.default.findAll();
            return res.status(200).json(wallets);
        };
        this.createWallet = async (req, res) => {
            try {
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
    }
}
exports.default = new WalletController();
//# sourceMappingURL=wallet-controller.js.map