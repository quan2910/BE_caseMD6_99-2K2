"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitController = void 0;
const limit_service_1 = require("../service/limit-service");
class LimitController {
    constructor() {
        this.showAll = async (req, res) => {
            let limit = await this.limitService.findAll();
            return res.status(200).json(limit);
        };
        this.create = async (req, res) => {
            try {
                let limit = await this.limitService.create(req.body);
                return res.status(200).json({
                    limit: limit,
                    mess: 'Limit Success !!'
                });
            }
            catch (e) {
                res.json({
                    err: e.mess
                });
            }
        };
        this.update = async (req, res) => {
            try {
                let limit = await this.limitService.edit(req, res);
                res.json(limit);
            }
            catch (e) {
                res.json(e.message);
            }
        };
        this.remove = async (req, res) => {
            try {
                let limit = await this.limitService.delete(req, res);
                return res.json({ mess: "delete success", limit: limit });
            }
            catch (e) {
                res.json(e.message);
            }
        };
        this.limitService = new limit_service_1.LimitService();
    }
}
exports.LimitController = LimitController;
exports.default = new LimitController();
//# sourceMappingURL=limit-controller.js.map