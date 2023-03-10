import {Router} from "express";
import walletController from "../controller/wallet-controller";


export const router = Router();



export const walletRouter =  Router();

walletRouter.get('/',walletController.showAll);
walletRouter.post('/create',walletController.createWallet);
walletRouter.delete('/:idWallet',walletController.removeWallet)
walletRouter.put('/:idWallet',walletController.editWallet);
walletRouter.get("/detail-wallet/:id",walletController.showWalletDetail)
walletRouter.get("/transaction-by-month/:id",walletController.showTransactionByMonth)
walletRouter.get("/transaction-by-date/:id",walletController.showTransactionByDate)
walletRouter.get("/transaction-by-only-month/:id",walletController.showTransactionByOnlyMonth)
