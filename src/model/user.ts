import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'users'})
export class User {
    @PrimaryGeneratedColumn({type:'int'})
    public readonly idUser: number;
    @Column({type:'varchar'})
    public username: string;
    @Column({type:'varchar'})
    public password: string;
    @Column ({type:'varchar',default :""})
    public avatar: string;
    @Column({type:'int',default:4})
    public sex: number;
    @Column({type:'varchar',default:""})
    public address: string;
    @Column({type:'int',default:0})
    public age: number;
}