import { BaseRepository } from "./base-repository";
import { Budget } from "../models/budget";

export class BudgetRepository extends BaseRepository<Budget> {
    constructor() {
        super('budget');
    }
}