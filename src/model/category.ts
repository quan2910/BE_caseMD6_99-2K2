import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'category'})
export class Category{
    @PrimaryGeneratedColumn({type:'int'})
    public readonly idCategory: number;
    @Column({type:'varchar'})
    public nameCategory: string;
    @Column({type:'varchar'})
    public statusCategory: string;
    @Column ({type:'varchar', default: ''})
    public color: string;
    @Column ({type:'varchar'})
    public userId: string;
}