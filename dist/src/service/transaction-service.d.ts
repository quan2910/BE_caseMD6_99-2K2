export declare class TransactionService {
    transactionRepo: any;
    constructor();
    createTransaction: (transaction: any) => Promise<void>;
    getTransactions: () => Promise<any>;
    deleteTransaction: (idTransaction: any) => Promise<void>;
}
