import { Injectable, Optional } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Configuration, ConfigurationParameters } from '../misc/configuration';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { TransactionsResponse } from '../misc/TransactionsResponse';
import { GetTransactionsQueryParams } from '../types/GetTransactions.request.types';

@Injectable()
export class TransactionsService {
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
   * List transactions
   * Lists transactions on the network. This includes successful and unsuccessful transactions.
   * @param accountId The ID of the account to return information for
   * @param limit The maximum number of items to return
   * @param order The order in which items are listed
   * @param timestamp The consensus timestamp in seconds.nanoseconds format with an optional comparison operator
   * @param transactiontype
   * @param result The transaction success type.
   * @param type The transaction account balance modification type.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public listTransactions(
    queryParams: GetTransactionsQueryParams,
  ): Observable<AxiosResponse<TransactionsResponse>> {
    const {
      accountId,
      limit,
      order,
      timestamp,
      transactiontype,
      result,
      type,
    } = queryParams;

    const queryParameters = new URLSearchParams();
    if (accountId !== undefined && accountId !== null) {
      queryParameters.append('account.id', <any>accountId);
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
    if (transactiontype !== undefined && transactiontype !== null) {
      queryParameters.append('transactiontype', <any>transactiontype);
    }
    if (result !== undefined && result !== null) {
      queryParameters.append('result', <any>result);
    }
    if (type !== undefined && type !== null) {
      queryParameters.append('type', <any>type);
    }

    const headers = { ...this.defaultHeaders };

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    return this.httpClient.get<TransactionsResponse>(
      `${this.configuration.basePath}/api/v1/transactions`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
}
