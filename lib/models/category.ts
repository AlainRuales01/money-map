import { CategoryType } from "./category-type";

export interface Category{
    id: string;
    name: string;
    description: string;
    category_type: CategoryType;
}