"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitService = void 0;
const data_source_1 = require("../data-source");
const limit_1 = require("../model/limit");
class LimitService {
    constructor() {
        this.findAll = async () => {
            let wallets = await this.limitRepository.find();
            return wallets;
        };
        this.create = async (limit) => {
            return await this.limitRepository.save(limit);
        };
        this.delete = async (req, res) => {
            let idLimit = req.params.idLimit;
            await this.limitRepository.delete(idLimit);
            res.status(201).json({
                mess: 'Delete Success !!'
            });
        };
        this.edit = async (req, res) => {
            let idLimit = +req.body.idLimit;
            let newLimit = req.body;
            let limits = await this.limitRepository.update({ idLimit: idLimit }, newLimit);
            return limits;
        };
        this.findByIdWallet = async (req, res) => {
            let walletId = +req.params.walletId;
            let limits = await this.limitRepository.findBy({ walletId: walletId });
            return limits;
        };
        this.limitRepository = data_source_1.AppDataSource.getRepository(limit_1.Limit);
    }
}
exports.LimitService = LimitService;
exports.default = new LimitService();
//# sourceMappingURL=limit-service.js.map