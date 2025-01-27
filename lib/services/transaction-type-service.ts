import { TransactionTypeRepository } from "../repositories/transaction-type-repository";

export class TransactionTypeService {
    private transactionTypeRepository: TransactionTypeRepository;

    constructor() {
        this.transactionTypeRepository = new TransactionTypeRepository();
    }

    async getAll() {
        return await this.transactionTypeRepository.getAll();
    }
}