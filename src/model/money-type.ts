import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
<<<<<<< HEAD
export class MoneyType {
=======
export class MoneyType{
>>>>>>> 4db0eeec8b7f4164d411d062208e65e982dd68d0
    @PrimaryGeneratedColumn({type:'int'})
    public readonly idMoneyType: number;
    @Column({type:'varchar'})
    public nameMoneyType: string;
}