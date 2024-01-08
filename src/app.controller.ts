import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import * as MOCKED_RESPONSE from './data/map-list.json';

@Controller('map')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get(':country')
  // getCountry(@Param('country') country: string): string {
  //   return this.appService.getCountry(country);
  // }

  @Get('/payment-method')
  getPaymentMoethod(@Res() res: Response): any {
    res.status(HttpStatus.OK).json(MOCKED_RESPONSE);
  }
}
