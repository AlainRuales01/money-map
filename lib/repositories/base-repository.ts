import { createClient } from '@/lib/supabase/supabase-client';

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

    // Obtener un usuario por id
    async getById(id: string): Promise<T> {
        const supabase = await createClient();
        const { data: incomes } = await supabase.from(this.table).select().eq('id', id);
        return incomes ? incomes[0] : null;
    }

    // Crear 
    async add(data: T) {
        const supabase = await createClient();
        await supabase.from(this.table).insert([data]);
    }

    // Actualizar
    async update(id: string, data: T) {
        const supabase = await createClient();
        await supabase.from(this.table).update(data).eq('id', id);
    }

    // Eliminar
    async delete(id: string) {
        const supabase = await createClient();
        await supabase.from(this.table).delete().eq('id', id);
    }
}