"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyTypeService = void 0;
const data_source_1 = require("../data-source");
const money_type_1 = require("../model/money-type");
class MoneyTypeService {
    constructor() {
        this.addMoneyType = async (req, res) => {
            let moneyType = req.body;
            let moneyTypes = await this.moneyTypeRepository.save(moneyType);
            return moneyTypes;
        };
        this.findAllMoneyType = async () => {
            let moneyTypes = await this.moneyTypeRepository.find();
            return moneyTypes;
        };
        this.moneyTypeRepository = data_source_1.AppDataSource.getRepository(money_type_1.MoneyType);
    }
}
exports.MoneyTypeService = MoneyTypeService;
//# sourceMappingURL=money-type-service.js.map