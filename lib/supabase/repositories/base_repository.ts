import { createClient } from '@/lib/supabase/supabase_client';

export class BaseRepository<T> {
    private table: string;
//todo: crear cliente de supabase solo una vez
    constructor(table: string) {
        this.table = table;
    }

    // Obtener todos los usuarios
    async getAll(): Promise<T[]> {
        const supabase = await createClient();
        const { data: incomes } = await supabase.from(this.table).select();
        return incomes as T[];
    }
}