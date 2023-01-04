"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletRouter = exports.router = void 0;
const express_1 = require("express");
const wallet_controller_1 = __importDefault(require("../controller/wallet-controller"));
exports.router = (0, express_1.Router)();
exports.walletRouter = (0, express_1.Router)();
exports.walletRouter.get('/', wallet_controller_1.default.showAll);
exports.walletRouter.post('/create', wallet_controller_1.default.createWallet);
exports.walletRouter.delete('/:idWallet', wallet_controller_1.default.removeWallet);
exports.walletRouter.put('/:idWallet', wallet_controller_1.default.editWallet);
exports.walletRouter.get("/detail-wallet/:id", wallet_controller_1.default.showWalletDetail);
exports.walletRouter.get("/transaction-by-month/:id", wallet_controller_1.default.showTransactionByMonth);
exports.walletRouter.get("/transaction-by-month/:id", wallet_controller_1.default.showTransactionByMonth);
//# sourceMappingURL=wallet-router.js.map