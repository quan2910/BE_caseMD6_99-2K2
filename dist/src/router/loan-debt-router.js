"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loanDebtRouter = exports.router = void 0;
const express_1 = require("express");
const loan_debt_controller_1 = __importDefault(require("../controller/loan-debt-controller"));
exports.router = (0, express_1.Router)();
exports.loanDebtRouter = (0, express_1.Router)();
exports.loanDebtRouter.get('/', loan_debt_controller_1.default.showLoanDebt);
exports.loanDebtRouter.get('/detail-loan-debt/:idWallet', loan_debt_controller_1.default.showLoanDebtDetail);
exports.loanDebtRouter.post('/', loan_debt_controller_1.default.createLoanDebt);
exports.loanDebtRouter.put('/edit-loan-debt', loan_debt_controller_1.default.updateLoanDebt);
exports.loanDebtRouter.delete('/delete/:idLoanDebt', loan_debt_controller_1.default.deleteLoanDebt);
//# sourceMappingURL=loan-debt-router.js.map