import { Category } from "./category";

export interface Budget{
    id: string;
    date: Date;
    amount: number;
    category: Category;
}