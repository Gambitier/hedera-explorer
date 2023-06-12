import { Module } from '@nestjs/common';
import { HederaModule } from './hedera/hedera.module';

@Module({
  imports: [HederaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
