import { Transaction } from "@/lib/models/transaction";
import { BaseRepository } from "./base-repository";

export class TransactionRepository extends BaseRepository<Transaction> {
    constructor() {
        super('transaction');
    }
}