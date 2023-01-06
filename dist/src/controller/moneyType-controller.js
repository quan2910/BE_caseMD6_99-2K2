"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyTypeController = void 0;
const moneyType_Service_1 = require("../service/moneyType-Service");
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
        this.moneyTypeService = new moneyType_Service_1.MoneyTypeService();
    }
}
exports.MoneyTypeController = MoneyTypeController;
exports.default = new MoneyTypeController();
//# sourceMappingURL=moneyType-controller.js.map