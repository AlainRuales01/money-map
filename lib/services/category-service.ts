import { CategoryRepository } from "@/lib/repositories/category-repository";

export class CategoryService {
    private categoryRepository: CategoryRepository;

    constructor() {
        this.categoryRepository = new CategoryRepository();
    }

    async getAll() {
        return await this.categoryRepository.getAll();
    }
}