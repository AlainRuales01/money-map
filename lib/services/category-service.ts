import { CategoryRepository } from "@/lib/repositories/category-repository";
import { Category } from "../models/category";
import { AddCategory } from "../types/category";
import { Mapper } from "../shared/utils/mapper";

export class CategoryService {
  private categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async getAll() {
    return await this.categoryRepository.getAll();
  }

  async add(category: AddCategory) {
    // Crear un nuevo objeto Category
    const newCategory = Mapper.toEntity(category, {
      id: crypto.randomUUID(),
    }) as Category;
    return await this.categoryRepository.add(newCategory);
  }
}
