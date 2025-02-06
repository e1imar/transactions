import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { Category } from "./category/category.entity";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    dateTime: Date;

    @Column({ nullable: true })
    author: string;

    @Column('decimal')
    sum: number;

    @ManyToOne(() => Category, {eager: true, nullable: false})
    category: Category;

    @Column({ nullable: true })
    comment: string;
}