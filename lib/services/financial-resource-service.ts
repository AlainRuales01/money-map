import { FinancialResourceRepository } from "../repositories/financial-resource-repository";


export class FinancialResourceService {
    private financialResourceRepository: FinancialResourceRepository;

    constructor() {
        this.financialResourceRepository = new FinancialResourceRepository();
    }

    async getAll() {
        return await this.financialResourceRepository.getAll();
    }
}