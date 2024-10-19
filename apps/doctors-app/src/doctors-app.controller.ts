import { Controller, Get } from '@nestjs/common';
import { DoctorsAppService } from './doctors-app.service';

@Controller()
export class DoctorsAppController {
  constructor(private readonly doctorsAppService: DoctorsAppService) {}

  @Get()
  getHello(): string {
    return this.doctorsAppService.getHello();
  }
}
