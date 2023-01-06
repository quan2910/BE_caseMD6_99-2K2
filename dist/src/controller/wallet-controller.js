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
        this.showTransactionByMonth = async (req, res) => {
            try {
                let idUser = req.params.id;
                let { month } = req.query;
                let { year } = req.query;
                let walletHome = await wallet_service_1.default.findTransactionByTime(idUser, year, month);
                res.json(walletHome);
            }
            catch (e) {
                res.json(e.message);
            }
        };
        this.showTransactionByDate = async (req, res) => {
            try {
                let idUser = req.params.id;
                let { fromDate } = req.query;
                let { toDate } = req.query;
                let walletHome = await wallet_service_1.default.findTransactionByDate(idUser, fromDate, toDate);
                res.json(walletHome);
            }
            catch (e) {
                res.json(e.message);
            }
        };
        this.showTransactionByOnlyMonth = async (req, res) => {
            try {
                let arrMonth = [];
                let idUser = req.params.id;
                let month1 = await wallet_service_1.default.findTransactionByOnlyMonth(idUser, 2023, 1);
                let month12 = await wallet_service_1.default.findTransactionByOnlyMonth(idUser, 2022, 12);
                let month11 = await wallet_service_1.default.findTransactionByOnlyMonth(idUser, 2022, 11);
                let month10 = await wallet_service_1.default.findTransactionByOnlyMonth(idUser, 2022, 10);
                let month9 = await wallet_service_1.default.findTransactionByOnlyMonth(idUser, 2022, 9);
                let month8 = await wallet_service_1.default.findTransactionByOnlyMonth(idUser, 2022, 8);
                arrMonth.push(month8);
                arrMonth.push(month9);
                arrMonth.push(month10);
                arrMonth.push(month11);
                arrMonth.push(month12);
                arrMonth.push(month1);
                res.json(arrMonth);
            }
            catch (e) {
                res.json("lỗi rồi");
            }
        };
        this.userService = new user_service_1.UserService();
    }
}
exports.default = new WalletController();
//# sourceMappingURL=wallet-controller.js.map