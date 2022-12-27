"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletService = void 0;
const data_source_1 = require("../data-source");
const wallet_1 = require("../model/wallet");
class WalletService {
    constructor() {
        this.findAllWallet = async () => {
            return await this.walletRepository.find();
        };
        this.walletRepository = data_source_1.AppDataSource.getRepository(wallet_1.Wallet);
    }
}
exports.WalletService = WalletService;
//# sourceMappingURL=wallet-service.js.map