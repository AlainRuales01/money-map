import { IncomeRepository } from "@/lib/repositories/income-repository";

export class IncomeService {
    private incomeRepository: IncomeRepository;

    constructor() {
        this.incomeRepository = new IncomeRepository();
    }

    async getAllIncomes() {
        return await this.incomeRepository.getAll();
    }
}