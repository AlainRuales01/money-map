'use server'

import { categoryTypeService } from '@shared/services';

export const getAll = async () => {
    const result = await categoryTypeService.getAll();
    return {result};
}