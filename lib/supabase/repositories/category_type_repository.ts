import { CategoryType } from "@/models/category_type";
import { BaseRepository } from "./base_repository";

export class CategoryTypeRepository extends BaseRepository<CategoryType> {
    constructor() {
        super('category_type');
    }
}