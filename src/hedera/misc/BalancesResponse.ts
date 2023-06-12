export type AccountBalance = any;
export type Links = any;

export interface BalancesResponse {
  timestamp?: string | null;
  balances?: Array<AccountBalance>;
  links?: Links;
}
