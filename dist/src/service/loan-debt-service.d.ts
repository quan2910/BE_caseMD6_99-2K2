export declare class LoanDebtService {
    loanDebtRepo: any;
    constructor();
    create: (loanDebt: any) => Promise<void>;
    getLoanDebt: () => Promise<any>;
    getLoanDebtDetail: (idWallet: any) => Promise<any>;
    updateLoanDebt: (idLoanDebt: any, updateLoanDebt: any) => Promise<void>;
    deleteLoanDebt: (idLoanDebt: any) => Promise<void>;
}
