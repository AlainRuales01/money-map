import { CategoryService } from '@/lib/services/category-service';
import { CategoryTypeService } from '@/lib/services/category-type-service';

export const categoryTypeService = new CategoryTypeService();
export const categoryService = new CategoryService();