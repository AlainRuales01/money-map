import { IncomeRepository } from "@/lib/supabase/repositories/income_repository";

export class IncomeService {
    private incomeRepository: IncomeRepository;

    constructor() {
        this.incomeRepository = new IncomeRepository();
    }

    async getAllIncomes() {
        return await this.incomeRepository.getAll();
    }
}