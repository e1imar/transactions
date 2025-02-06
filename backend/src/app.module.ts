import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionModule } from './transaction/transaction.module';
import { Transaction } from './transaction/transaction.entity';
import {Category} from "./transaction/category/category.entity";
import {CategoryModule} from "./transaction/category/category.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Transaction, Category],
      synchronize: true, // Set to false in production
    }),
    TransactionModule,
    CategoryModule
  ],
})
export class AppModule {}