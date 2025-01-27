import { BaseRepository } from "./base-repository";
import { TransactionType } from "../models/transaction-type";

export class TransactionTypeRepository extends BaseRepository<TransactionType> {
    constructor() {
        super('transaction_type');
    }
}