import { CategoryTypeRepository } from "@/lib/repositories/category-type-repository";

export class CategoryTypeService {
    private categoryTypeRepository: CategoryTypeRepository;

    constructor() {
        this.categoryTypeRepository = new CategoryTypeRepository();
    }

    async getAll() {
        return await this.categoryTypeRepository.getAll();
    }
}