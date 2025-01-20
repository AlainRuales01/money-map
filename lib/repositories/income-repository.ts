import { Income } from "@/lib/models/income";
import { BaseRepository } from "./base-repository";

export class IncomeRepository extends BaseRepository<Income> {
    constructor() {
        super('income');
    }
}