import { BudgetRepository } from "../repositories/budget-repository";

export class BudgetService {
    private budgetRepository: BudgetRepository;

    constructor() {
        this.budgetRepository = new BudgetRepository();
    }

    async getAll() {
        return await this.budgetRepository.getAll();
    }
}