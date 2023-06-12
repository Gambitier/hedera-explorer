import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { NetworkNameEnum } from '../misc/NetworkNameEnum';
import { TransactionTypesEnum } from '../misc/TransactionTypes';

export class GetTransactionsParams {
  @ApiProperty({
    name: 'networkName',
    enum: NetworkNameEnum,
  })
  @IsNotEmpty()
  @IsEnum(NetworkNameEnum)
  networkName: NetworkNameEnum;
}

enum TransactionOrderEnum {
  asc = 'asc',
  desc = 'desc',
}

enum TransactionResultEnum {
  success = 'success',
  fail = 'fail',
}

enum TransactionTypeEnum {
  credit = 'credit',
  debit = 'debit',
}

export class GetTransactionsQueryParams {
  @ApiProperty({ required: false })
  @IsOptional()
  accountId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  limit?: number;

  @ApiProperty({ required: false, enum: TransactionOrderEnum })
  @IsOptional()
  @IsEnum(TransactionOrderEnum)
  order?: TransactionOrderEnum;

  @ApiProperty({ required: false })
  @IsOptional()
  timestamp?: Array<string>;

  @ApiProperty({ required: false, enum: TransactionTypesEnum })
  @IsOptional()
  @IsEnum(TransactionTypesEnum)
  transactiontype?: TransactionTypesEnum;

  @ApiProperty({ required: false, enum: TransactionResultEnum })
  @IsOptional()
  @IsEnum(TransactionResultEnum)
  result?: TransactionResultEnum;

  @ApiProperty({ required: false, enum: TransactionTypeEnum })
  @IsOptional()
  @IsEnum(TransactionTypeEnum)
  type?: TransactionTypeEnum;
}
