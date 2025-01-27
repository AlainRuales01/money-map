import { CategoryType } from "@/lib/models/category-type";
import { BaseRepository } from "./base-repository";

export class CategoryTypeRepository extends BaseRepository<CategoryType> {
    constructor() {
        super('category_type');
    }
}