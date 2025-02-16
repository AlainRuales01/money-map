import { CategoryRepository } from "@/lib/repositories/category-repository";
import { Category } from "../models/category";

export class CategoryService {
    private categoryRepository: CategoryRepository;

    constructor() {
        this.categoryRepository = new CategoryRepository();
    }

    async getAll() {
        return await this.categoryRepository.getAll();
    }

    async add(category: Category) {
        return await this.categoryRepository.add(category);
    }
}