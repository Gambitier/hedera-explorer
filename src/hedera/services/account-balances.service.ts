import { Injectable, Optional } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Configuration, ConfigurationParameters } from '../misc/configuration';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { BalancesResponse } from '../misc/BalancesResponse';
import { GetAccountBalanceQueryParams } from '../types/GetAccountBalance.request.types';

@Injectable()
export class AccountBalanceService {
  public defaultHeaders: Record<string, string> = {};
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpService,
    @Optional() configuration: Configuration,
  ) {
    this.configuration = configuration || this.configuration;
  }

  public overrideDefaultConfigs(
    configurationParameters: ConfigurationParameters,
  ) {
    this.configuration = new Configuration(configurationParameters);
    return this;
  }

  /**
   * List account balances
   * Returns a timestamped list of account balances on the network, limited to at most 50 token balances per account as outlined in HIP-367. This includes both HBAR and token balances for accounts.
   * @param accountId Account id or account alias with no shard realm or evm address with no shard realm
   * @param accountBalance The optional balance value to compare against
   * @param accountPublickey The account\&#39;s public key to compare against
   * @param limit The maximum number of items to return
   * @param order The order in which items are listed
   * @param timestamp The consensus timestamp in seconds.nanoseconds format with an optional comparison operator
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public listAccountBalances(
    params: GetAccountBalanceQueryParams,
  ): Observable<AxiosResponse<BalancesResponse>> {
    const {
      accountId,
      accountBalance,
      accountPublickey,
      limit,
      order,
      timestamp,
    } = params;

    const queryParameters = new URLSearchParams();
    if (accountId !== undefined && accountId !== null) {
      queryParameters.append('account.id', <any>accountId);
    }
    if (accountBalance !== undefined && accountBalance !== null) {
      queryParameters.append('account.balance', <any>accountBalance);
    }
    if (accountPublickey !== undefined && accountPublickey !== null) {
      queryParameters.append('account.publickey', <any>accountPublickey);
    }
    if (limit !== undefined && limit !== null) {
      queryParameters.append('limit', <any>limit);
    }
    if (order !== undefined && order !== null) {
      queryParameters.append('order', <any>order);
    }
    if (timestamp) {
      timestamp.forEach((element) => {
        queryParameters.append('timestamp', <any>element);
      });
    }

    const headers = { ...this.defaultHeaders };

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    return this.httpClient.get<BalancesResponse>(
      `${this.configuration.basePath}/api/v1/balances`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
}
