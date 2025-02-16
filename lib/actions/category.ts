'use server';
import { Category } from '@/lib/models/category';
import { categoryService } from '@shared/services';

export async function getAll(){
    const result = await categoryService.getAll();
    return {result};
}

export async function add(category: Category){
    const result = await categoryService.add(category);
    return {result};
}