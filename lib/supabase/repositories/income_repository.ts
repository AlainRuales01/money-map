import { Income } from "@/models/income";
import { BaseRepository } from "./base_repository";

export class IncomeRepository extends BaseRepository<Income> {
    constructor() {
        super('income');
    }
}