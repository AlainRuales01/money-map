'use server';

import { categoryService } from '@shared/services';
import { AddCategory } from '../types/category';

export async function getAll(){
    const result = await categoryService.getAll();
    return {result};
}

export async function add(category: AddCategory){
    const result = await categoryService.add(category);
    return {result};
}