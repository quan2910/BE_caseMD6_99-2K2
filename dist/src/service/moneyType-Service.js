"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyTypeService = void 0;
const data_source_1 = require("../data-source");
const money_type_1 = require("../model/money-type");
class MoneyTypeService {
    constructor() {
        this.getAll = async () => {
            let moneyTypes = await this.moneyTypeRepo.find();
            return moneyTypes;
        };
        this.moneyTypeRepo = data_source_1.AppDataSource.getRepository(money_type_1.MoneyType);
    }
}
exports.MoneyTypeService = MoneyTypeService;
//# sourceMappingURL=moneyType-Service.js.map