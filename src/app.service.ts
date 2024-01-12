import { Injectable } from '@nestjs/common';
import * as MOCKED_RESPONSE from './data/map-list.json';

@Injectable()
export class AppService {
  getUpdatedMapArray(): any {
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

    return updatedMapArray;
  }
}
