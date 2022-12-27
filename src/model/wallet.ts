import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Wallet {
    @PrimaryGeneratedColumn()
    public readonly idWallet: number;
    @Column({type: 'varchar'})
    public nameWallet: string;
    @Column({type: 'varchar', default: ''})
    public icon: string;
    @Column({type: 'int'})
    public moneyAmount: number;
    @Column({type:'int'})
    public status:number;
    @Column({type:'int'})
    public moneyTypeId:number;
    @Column({type:'int'})
    public userId:number
}