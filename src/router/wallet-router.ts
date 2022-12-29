import {Router} from "express";
import walletController from "../controller/wallet-controller";


export const router = Router();



export const walletRouter =  Router();

walletRouter.get('/',walletController.showAll);
walletRouter.post('/create',walletController.createWallet);
walletRouter.delete('/:idWallet',walletController.removeWallet)
walletRouter.put('/:idWallet',walletController.editWallet);
walletRouter.get('/find-by-idUser/:userId', walletController.showWalletByIdUser)
walletRouter.get("/detail-wallet/:id",walletController.showWalletDetail)
