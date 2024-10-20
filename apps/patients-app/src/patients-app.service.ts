import { Injectable } from '@nestjs/common';

@Injectable()
export class PatientsAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
