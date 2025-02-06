import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';
import {Category} from "./category/category.entity";

@Injectable()
export class TransactionService {
  constructor(
      @InjectRepository(Transaction)
      private transactionRepository: Repository<Transaction>,
      @InjectRepository(Category)
      private categoryRepository: Repository<Category>
  ) {}

  findAll() {
    return this.transactionRepository.find();
  }

  async create(transaction: Partial<Transaction>) {
    return this.transactionRepository.save(transaction);
  }
}