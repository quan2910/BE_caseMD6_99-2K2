import {AppDataSource} from "../data-source";
import {Wallet} from "../model/wallet";
import {Request, Response} from "express";
import {Transaction} from "../model/transaction";
import {LoanDebt} from "../model/loan-debt";

export class WalletService {
    private walletRepository: any;
    transactionRepository:any
    loanDebtRepo: any

    constructor() {
        this.walletRepository = AppDataSource.getRepository(Wallet)
        this.transactionRepository=AppDataSource.getRepository(Transaction)
        this.loanDebtRepo = AppDataSource.getRepository(LoanDebt)
    }

    findAll = async () => {
        let wallets = await this.walletRepository.query(`select * from wallet join money_type on moneyTypeId = idMoneyType`)
        return wallets
    }
    create = async (wallet) => {
        return await this.walletRepository.save(wallet);
    }

    delete = async (req: Request, res: Response) => {
        let idWallet = req.params.idWallet;
        await this.walletRepository.delete(idWallet);
        res.status(201).json({
            mess: 'Delete Success !!'
        })
    }

    edit = async (req:Request,res : Response) => {
        let idWallet = +req.params.idWallet;
        let newWallet = req.body;
        let currentWallet =  await this.walletRepository.findOneById(idWallet)
        let wallets = await this.walletRepository.update({idWallet:idWallet},newWallet)
        let transactions = await this.walletRepository.query(`select * from transaction join category on idCategory = categoryId where walletId =${idWallet}`)
        let loanDebtDetails =await this.loanDebtRepo.query(`select * from loan_debt join category_loan_debt on loan_debt.idCategoryLoanDebt = category_loan_debt.idCategoryLoanDebt  where idWallet = ${+idWallet}`)


        console.log(loanDebtDetails)
        if(currentWallet.moneyTypeId==newWallet.moneyTypeId){
            return wallets
        }
        if(currentWallet.moneyTypeId==1 &&newWallet.moneyTypeId==2){
            for (let transaction of transactions) {
                  let totalSpent = transaction.totalSpent /23000
                await this.transactionRepository.update({idTransaction:transaction.idTransaction},{totalSpent:totalSpent})
            }
            for (let loanDebtDetail of loanDebtDetails) {
                let totalSpent2 = loanDebtDetail.moneyLoanDebt /23000
                console.log(totalSpent2)
                await this.loanDebtRepo.update({idLoanDebt:loanDebtDetail.idLoanDebt},{moneyLoanDebt:totalSpent2})
            }

            return wallets
        }
        if(currentWallet.moneyTypeId==2 &&newWallet.moneyTypeId==1){
            for (let transaction of transactions) {
                let totalSpent = transaction.totalSpent *23000
                await this.transactionRepository.update({idTransaction:transaction.idTransaction},{totalSpent:totalSpent})
            }
            for (let loanDebtDetail of loanDebtDetails) {
                let totalSpent2 = loanDebtDetail.moneyLoanDebt *23000
                await this.loanDebtRepo.update({idLoanDebt:loanDebtDetail.idLoanDebt},{moneyLoanDebt:totalSpent2})
            }

            return wallets
        }
        return wallets
    }

    findByIdUser = async (req: Request, res: Response) => {
        let userId = + req.params.userId
        let wallets = await this.walletRepository.findBy({userId: userId})
        return wallets
    }
    getWalletDetail = async (idUser)=>{


            let wallets = await this.walletRepository.query(`select * from wallet where userId =${+idUser}  && status = 1`)
            let transactions = await this.walletRepository.query(`select * from transaction join category on idCategory = categoryId where walletId =${+wallets[0].idWallet} order by time DESC`)
            let walletHome = {
                wallet : wallets,
                transactions :transactions
            }
            return walletHome

    }
    findTransactionByTime = async (idUser,year,month)=>{
        let wallets = await this.walletRepository.query(`select * from wallet where userId =${+idUser}  && status = 1`)
        let transactions
        if(month){
             transactions = await this.walletRepository.query(`select * from transaction join category on idCategory = categoryId where walletId =${+wallets[0].idWallet} And YEAR(time) = ${year} AND MONTH(time)=${month} order by time DESC`)
        }else {
           transactions = await this.walletRepository.query(`select * from transaction join category on idCategory = categoryId where walletId =${+wallets[0].idWallet} order by time DESC`)

        }
        let walletHome = {
            wallet : wallets,
            transactions :transactions
        }
        return walletHome
    }
    findTransactionByDate = async (idUser,fromDate,toDate)=>{
        console.log(fromDate,toDate)
        let wallets = await this.walletRepository.query(`select * from wallet where userId =${+idUser}  && status = 1`)
        let   transactions = await this.walletRepository.query(`select * from transaction join category on idCategory = categoryId where walletId =${+wallets[0].idWallet} And time >='${fromDate}' AND time <='${toDate}' order by time DESC`)
        let walletHome = {
            wallet : wallets,
            transactions :transactions
        }

        return walletHome
    }
    findTransactionByOnlyMonth = async (idUser,year,month)=>{
        let wallets = await this.walletRepository.query(`select * from wallet where userId =${+idUser}  && status = 1`)
        let transactions
        if(month){
            transactions = await this.walletRepository.query(`select * from transaction join category on idCategory = categoryId where walletId =${+wallets[0].idWallet} And YEAR(time) = ${year} AND MONTH(time)=${month}`)
        }else {
            transactions = await this.walletRepository.query(`select * from transaction join category on idCategory = categoryId where walletId =${+wallets[0].idWallet}`)

        }

        return transactions
    }

}

export default new WalletService();