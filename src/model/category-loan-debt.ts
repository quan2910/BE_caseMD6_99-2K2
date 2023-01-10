import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()

export class CategoryLoanDebt {
    @PrimaryGeneratedColumn({type:'int'})
    public readonly idCategoryLoanDebt: number;
    @Column({type:'varchar'})
    public nameCategoryLoanDebt: string;
}