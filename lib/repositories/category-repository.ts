import { BaseRepository } from "./base-repository";
import { Category } from "../models/category";

export class CategoryRepository extends BaseRepository<Category> {
    constructor() {
        super('category');
    }
}