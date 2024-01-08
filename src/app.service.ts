import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getCountry(country: string): string {
    return `Hello, ${country}! Welcome to NestJS!`;
  }
}
