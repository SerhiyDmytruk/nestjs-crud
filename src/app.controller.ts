import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller('map')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCountry(@Res() res: Response): any {
    const updatedMapArray = this.appService.getUpdatedMapArray();

    res.status(HttpStatus.OK).json(updatedMapArray);
  }
}
