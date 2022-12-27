import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class MoneyType {
    @PrimaryGeneratedColumn({type:'int'})
    public readonly idMoneyType: number;
    @Column({type:'varchar'})
    public nameMoneyType: string;
}