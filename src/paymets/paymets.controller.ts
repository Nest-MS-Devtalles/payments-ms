import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { MessagePattern, Payload } from '@nestjs/microservices';
import { PaymentSessionDto } from './dtos/payments-session.dto';
import { PaymetsService } from './paymets.service';

@Controller('payments')
export class PaymetsController {
  constructor(private readonly paymetsService: PaymetsService) {}

  // @Post('create-payment-session')
  @MessagePattern('create.payment.session')
  createPaymentSession(@Payload() paymentSessionDto: PaymentSessionDto) {
    return this.paymetsService.createPaymentSession(paymentSessionDto);
  }

  @Get('success')
  paymentSuccess() {
    return {
      ok: true,
      message: 'Payment successful',
    };
  }

  @Get('cancel')
  paymentCancel() {
    return {
      ok: false,
      message: 'Payment cancelled',
    };
  }

  @Post('webhook')
  async stripeWebhook(@Req() req: Request, @Res() res: Response) {
    return this.paymetsService.stripeWebhook(req, res);
  }
}
