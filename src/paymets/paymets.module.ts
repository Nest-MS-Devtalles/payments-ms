import { Module } from '@nestjs/common';
import { PaymetsService } from './paymets.service';
import { PaymetsController } from './paymets.controller';

@Module({
  controllers: [PaymetsController],
  providers: [PaymetsService],
})
export class PaymetsModule {}
