export type Transaction = any;
export type Links = any;

export interface TransactionsResponse {
  transactions?: Array<Transaction>;
  links?: Links;
}
