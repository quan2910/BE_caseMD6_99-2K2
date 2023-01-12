import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()

export class LoanDebt {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly idLoanDebt: number;
    @Column({type: 'varchar'})
    public namePersonLoanDebt: string;
    @Column({type: 'varchar'})
    public contentLoanDebt: string;
    @Column({type: 'int'})
    public moneyLoanDebt: number;
    @Column({type: 'int'})
    public idCategoryLoanDebt: number;
    @Column({type:'int'})
    public idWallet:number
}