import { BaseRepository } from "./base-repository";
import { FinancialResource } from "../models/financial-resource";

export class FinancialResourceRepository extends BaseRepository<FinancialResource> {
    constructor() {
        super('financial_resource');
    }
}