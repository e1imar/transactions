import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { Transaction } from './transaction.entity';
import {Category} from "./category/category.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Transaction, Category])],
    controllers: [TransactionController],
    providers: [TransactionService],
})
export class TransactionModule {}
