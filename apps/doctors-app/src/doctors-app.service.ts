import { Injectable } from '@nestjs/common';

@Injectable()
export class DoctorsAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
