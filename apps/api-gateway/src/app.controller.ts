import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { CreaePatientDto } from "./app.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createPatients(@Body() payload: CreaePatientDto) {
    return this.appService.createPatients(payload);
  }
}
