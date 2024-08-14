import { Module } from '@nestjs/common';

import { HealthCheckModule } from './health-check/health-check.module';
import { PaymetsModule } from './paymets/paymets.module';

@Module({
  imports: [PaymetsModule, HealthCheckModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
