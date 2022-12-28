import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'transaction'})
export class Transaction{
    @PrimaryGeneratedColumn({type:'int'})
    public readonly idTransaction: number;
    @Column({type:'varchar',default:""})
    public note: string;
    @Column({type:"date"})
    public time :string;
    @Column({type:"int"})
    public totalSpent :number;
    @Column({type:"int"})
    public walletId :number;
    @Column({type:"int"})
    public categoryId :number
    @Column({type:"int"})
    public userID :number;
}