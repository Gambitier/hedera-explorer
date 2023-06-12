import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { NetworkNameEnum } from '../misc/NetworkNameEnum';
import { TransactionTypesEnum } from '../misc/TransactionTypes';

export class GetAccountBalanceParams {
  @ApiProperty({
    name: 'networkName',
    enum: NetworkNameEnum,
  })
  @IsNotEmpty()
  @IsEnum(NetworkNameEnum)
  networkName: NetworkNameEnum;
}

enum AccountBalanceOrderEnum {
  asc = 'asc',
  desc = 'desc',
}

export class GetAccountBalanceQueryParams {
  @ApiProperty({ required: false })
  @IsOptional()
  accountId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  limit?: number;

  @ApiProperty({ required: false, enum: AccountBalanceOrderEnum })
  @IsOptional()
  @IsEnum(AccountBalanceOrderEnum)
  order?: AccountBalanceOrderEnum;

  @ApiProperty({ required: false })
  @IsOptional()
  timestamp?: Array<string>;

  @ApiProperty({ required: false })
  @IsOptional()
  accountBalance?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  accountPublickey?: string;
}
