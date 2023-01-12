import {AppDataSource} from "../data-source";
import {Limit} from "../model/limit";
import {Request, Response} from "express";


export class LimitService {
    private limitRepository: any;

    constructor() {
        this.limitRepository = AppDataSource.getRepository(Limit)
    }

    findAll = async () => {
        let wallets = await this.limitRepository.find()
        return wallets
    }
    create = async (limit) => {
        return await this.limitRepository.save(limit);
    }

    delete = async (req: Request, res: Response) => {
        let idLimit = req.params.idLimit;
        await this.limitRepository.delete(idLimit);
        res.status(201).json({
            mess: 'Delete Success !!'
        })
    }

    edit = async (req: Request, res: Response) => {
        let idLimit = +req.body.idLimit;
        let newLimit = req.body;
        let limits = await this.limitRepository.update({idLimit: idLimit}, newLimit)
        return limits
    }

    findByIdWallet = async (req: Request, res: Response) => {
        let walletId = +req.params.walletId
        let limits = await this.limitRepository.findBy({walletId: walletId})
        return limits
    }
    // getWalletDetail = async (idUser) => {
    //
    //
    //     let wallets = await this.walletRepository.query(`select *
    //                                                      from wallet
    //                                                      where userId = ${+idUser} && status = 1`)
    //     let transactions = await this.walletRepository.query(`select *
    //                                                           from transaction
    //                                                           join category on idCategory = categoryId
    //                                                           where walletId = ${+wallets[0].idWallet}`)
    //     let walletHome = {
    //         wallet: wallets,
    //         transactions: transactions
    //     }
    //     return walletHome
    //
    // }
    // findTransactionByTime = async (idUser, year, month) => {
    //     let wallets = await this.walletRepository.query(`select *
    //                                                      from wallet
    //                                                      where userId = ${+idUser} && status = 1`)
    //     let transactions
    //     if (month) {
    //         transactions = await this.walletRepository.query(`select *
    //                                                           from transaction
    //                                                                    join category on idCategory = categoryId
    //                                                           where walletId = ${+wallets[0].idWallet} And YEAR (time) = ${year}
    //                                                             AND MONTH (time)=${month}`)
    //     } else {
    //         transactions = await this.walletRepository.query(`select *
    //                                                           from transaction
    //                                                                    join category on idCategory = categoryId
    //                                                           where walletId = ${+wallets[0].idWallet}`)
    //
    //     }
    //     let walletHome = {
    //         wallet: wallets,
    //         transactions: transactions
    //     }
    //     return walletHome
    // }
    // findTransactionByDate = async (idUser, fromDate, toDate) => {
    //     console.log(fromDate, toDate)
    //     let wallets = await this.walletRepository.query(`select *
    //                                                      from wallet
    //                                                      where userId = ${+idUser} && status = 1`)
    //     let transactions = await this.walletRepository.query(`select *
    //                                                           from transaction
    //                                                                    join category on idCategory = categoryId
    //                                                           where walletId = ${+wallets[0].idWallet} And time >='${fromDate}' AND time <='${toDate}'`)
    //     let walletHome = {
    //         wallet: wallets,
    //         transactions: transactions
    //     }
    //
    //     return walletHome
    // }
    // findTransactionByOnlyMonth = async (idUser, year, month) => {
    //     let wallets = await this.walletRepository.query(`select *
    //                                                      from wallet
    //                                                      where userId = ${+idUser} && status = 1`)
    //     let transactions
    //     if (month) {
    //         transactions = await this.walletRepository.query(`select *
    //                                                           from transaction
    //                                                                    join category on idCategory = categoryId
    //                                                           where walletId = ${+wallets[0].idWallet} And YEAR (time) = ${year}
    //                                                             AND MONTH (time)=${month}`)
    //     } else {
    //         transactions = await this.walletRepository.query(`select *
    //                                                           from transaction
    //                                                                    join category on idCategory = categoryId
    //                                                           where walletId = ${+wallets[0].idWallet}`)
    //
    //     }
    //
    //     return transactions
    // }

}

export default new LimitService();