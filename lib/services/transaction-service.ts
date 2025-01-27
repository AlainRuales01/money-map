import { TransactionRepository } from "@/lib/repositories/transaction-repository";

export class TransactionService {
    private transactionRepository: TransactionRepository;

    constructor() {
        this.transactionRepository = new TransactionRepository();
    }

    async getAll() {
        return await this.transactionRepository.getAll();
    }
}