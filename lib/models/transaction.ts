import { Category } from "./category";
import { FinancialResource } from "./financial-resource";
import { TransactionType } from "./transaction-type";

export interface Transaction {
    id: string;
    description: string;
    date: Date;
    amount: number;
    category: Category;
    financialResource: FinancialResource;
    transactionType: TransactionType;
}