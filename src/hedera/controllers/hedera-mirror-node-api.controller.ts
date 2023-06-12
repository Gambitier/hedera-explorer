import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  GetTransactionsParams,
  GetTransactionsQueryParams,
} from '../types/GetTransactions.request.types';
import { TransactionsService } from '../services/transaction.service';
import {
  GetAccountBalanceParams,
  GetAccountBalanceQueryParams,
} from '../types/GetAccountBalance.request.types';
import { AccountBalanceService } from '../services/account-balances.service';

@ApiTags('hedera')
@Controller('hedera')
export class HederaMirrorNodeApiController {
  /**
   *
   */
  constructor(
    private transactionsService: TransactionsService,
    private accountService: AccountBalanceService,
  ) {}

  @Get(':networkName/transactions')
  async getTransactions(
    @Param() params: GetTransactionsParams,
    @Query() queryParams: GetTransactionsQueryParams,
  ) {
    const observable = this.transactionsService
      .overrideDefaultConfigs({
        networkName: params.networkName,
      })
      .listTransactions(queryParams);

    const response = await observable.toPromise();

    return response.data;
  }

  @Get(':networkName/accounts/balance')
  async getAccountBalance(
    @Param() params: GetAccountBalanceParams,
    @Query() queryParams: GetAccountBalanceQueryParams,
  ) {
    const observable = this.accountService
      .overrideDefaultConfigs({
        networkName: params.networkName,
      })
      .listAccountBalances(queryParams);

    const response = await observable.toPromise();

    return response.data;
  }
}
