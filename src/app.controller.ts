import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import * as MOCKED_RESPONSE from './data/map-list.json';

@Controller('map')
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get()
  getCountry(@Res() res: Response): any {
    interface Country {
      'alpha-3': string;
      name: string;
    }

    const updatedMapArray: Country[] = MOCKED_RESPONSE.map((country) => {
      return {
        'alpha-3': country['alpha-3'],
        name: country['name'],
      };
    });

    res.status(HttpStatus.OK).json(updatedMapArray);
  }
}
