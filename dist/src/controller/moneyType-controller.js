"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyTypeController = void 0;
const moneyType_service_1 = require("../service/moneyType-service");
class MoneyTypeController {
    constructor() {
        this.showAll = async (req, res) => {
            try {
                let moneyTypes = await this.moneyTypeService.getAll();
                res.json(moneyTypes);
            }
            catch (e) {
                res.json(e.message);
            }
        };
        this.moneyTypeService = new moneyType_service_1.MoneyTypeService();
    }
}
exports.MoneyTypeController = MoneyTypeController;
exports.default = new MoneyTypeController();
//# sourceMappingURL=moneyType-controller.js.map