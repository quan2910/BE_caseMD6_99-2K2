"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const money_type_service_1 = require("../service/money-type-service");
class MoneyTypeController {
    constructor() {
        this.addMoneyType = async (req, res) => {
            let moneyType = await this.moneyTypeService.addMoneyType(req, res);
            return res.status(200).json(moneyType);
        };
        this.getAllMoneyType = async (req, res) => {
            let moneyTypes = await this.moneyTypeService.findAllMoneyType();
            return res.status(200).json(moneyTypes);
        };
        this.moneyTypeService = new money_type_service_1.MoneyTypeService();
    }
}
exports.default = new MoneyTypeController();
//# sourceMappingURL=money-type-controller.js.map