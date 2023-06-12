import { Module } from '@nestjs/common';
import { HederaMirrorNodeApiController } from './controllers/hedera-mirror-node-api.controller';
import { TransactionsService } from './services/transaction.service';
import { HttpModule } from '@nestjs/axios';
import { AccountBalanceService } from './services/account-balances.service';

@Module({
  imports: [HttpModule],
  controllers: [HederaMirrorNodeApiController],
  providers: [TransactionsService, AccountBalanceService],
})
export class HederaModule {}
