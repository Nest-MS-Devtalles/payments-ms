import { Module } from '@nestjs/common';

import { NatsModule } from '../transports/nats.module';
import { PaymetsController } from './paymets.controller';
import { PaymetsService } from './paymets.service';

@Module({
  imports: [NatsModule],
  controllers: [PaymetsController],
  providers: [PaymetsService],
})
export class PaymetsModule {}
