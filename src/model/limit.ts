import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'limit'})
export class Limit{
    @PrimaryGeneratedColumn({type:'int'})
    public readonly idLimit: number;
    @Column({type:'int'})
    public moneyLimit: number;
    @Column({type:'int'})
    public walletId: number;
}