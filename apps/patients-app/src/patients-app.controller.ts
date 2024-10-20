import { Controller, Get } from '@nestjs/common';
import { PatientsAppService } from './patients-app.service';

@Controller()
export class PatientsAppController {
  constructor(private readonly patientsAppService: PatientsAppService) {}

  @Get()
  getHello(): string {
    return this.patientsAppService.getHello();
  }
}
