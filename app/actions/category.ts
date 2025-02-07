'use server';
import { categoryService } from '@shared/services';

export async function getAll(){
    const result = await categoryService.getAll();
    return {result};
}