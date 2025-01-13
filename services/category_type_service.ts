import { CategoryTypeRepository } from "@/lib/supabase/repositories/category_type_repository";

export class CategoryTypeService {
    private categoryTypeRepository: CategoryTypeRepository;

    constructor() {
        this.categoryTypeRepository = new CategoryTypeRepository();
    }

    async getAll() {
        return await this.categoryTypeRepository.getAll();
    }
}