import { Module } from '@nestjs/common';
import { PaymetsModule } from './paymets/paymets.module';

@Module({
  imports: [PaymetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
