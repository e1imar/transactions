import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>,
    ) {}

    async findAll() {
        return this.categoryRepository.find();
    }

    async seedCategory() {
        const existingCategory = await this.categoryRepository.count();
        if (existingCategory === 0) {
            const defaultCategory = [
                { name: "cash" },
                { name: "crypto" },
                { name: "bank" },
            ];
            await this.categoryRepository.insert(defaultCategory);
        }
    }

    async onModuleInit() {
        await this.seedCategory();
    }
}