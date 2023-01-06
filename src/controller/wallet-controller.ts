import {Request, Response} from "express";
import WalletService from "../service/wallet-service";
import walletService from "../service/wallet-service";
import {UserService} from "../service/user-service";


class WalletController {
     userService :UserService
    constructor() {
         this.userService = new UserService()
    }
    showAll = async (req: Request, res: Response) => {
        let wallets = await WalletService.findAll()
        return res.status(200).json(wallets);
    }

    createWallet = async (req: Request, res: Response) => {
        try {

           await this.userService.updateCheckBegin(req.body.userId)
            let wallet = await WalletService.create(req.body)
            return res.status(200).json({
                wallet: wallet,
                mess: 'Wallet Success!!!'
            })
        } catch (e) {
            res.json({
                    err: e.mess
                }
            )
        }
    }

    removeWallet = async (req: Request, res: Response) => {
        try {
            let wallets = await WalletService.delete(req, res);
            return res.json(wallets)
        } catch (e) {
            res.json({
                    err: e.mess
                }
            )
        }
    }

    editWallet = async (req: Request, res: Response) => {
        try {
            let wallets = await WalletService.edit(req, res);
            return res.status(200).json({
                wallet: wallets,
                mess: 'Edit Wallet Success!'
            })
        } catch (e) {
            res.json({
                    err: e.mess
                }
            )
        }

    }
    showWalletDetail = async (req:Request,res:Response)=>{
        try{
            let idUser = req.params.id
            let walletHome =  await walletService.getWalletDetail(idUser)
            res.json(walletHome)
        }catch (e) {
            res.json(e.message)
        }
    }
    showTransactionByMonth =async (req:Request,res:Response)=>{

        try{
            let idUser = req.params.id
            let {month} = req.query
            let {year} =req.query
           let walletHome=  await WalletService.findTransactionByTime(idUser,year,month)
            res.json(walletHome)
        }catch (e) {
            res.json(e.message)
        }
    }
    showTransactionByDate =async (req:Request,res:Response)=>{

        try{
            let idUser = req.params.id
            let {fromDate} = req.query
            let {toDate} =req.query
            let walletHome=  await WalletService.findTransactionByDate(idUser,fromDate,toDate)
            res.json(walletHome)
        }catch (e) {
            res.json(e.message)
        }
    }

    showTransactionByOnlyMonth =async (req:Request,res:Response)=>{

        try{
            let arrMonth =[]
            let idUser = req.params.id
            let month1=  await WalletService.findTransactionByOnlyMonth(idUser,2023,1)
            let month12=  await WalletService.findTransactionByOnlyMonth(idUser,2022,12)
            let month11=  await WalletService.findTransactionByOnlyMonth(idUser,2022,11)
            let month10=  await WalletService.findTransactionByOnlyMonth(idUser,2022,10)
            let month9=  await WalletService.findTransactionByOnlyMonth(idUser,2022,9)
            let month8=  await WalletService.findTransactionByOnlyMonth(idUser,2022,8)
            arrMonth.push(month8)
            arrMonth.push(month9)
            arrMonth.push(month10)
            arrMonth.push(month11)
            arrMonth.push(month12)
            arrMonth.push(month1)
            res.json(arrMonth)


        }catch (e) {
            res.json("lỗi rồi")
        }
    }
}
export default new WalletController()