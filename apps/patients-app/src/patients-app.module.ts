import { Module } from '@nestjs/common';
import { PatientsAppController } from './patients-app.controller';
import { PatientsAppService } from './patients-app.service';

@Module({
  imports: [],
  controllers: [PatientsAppController],
  providers: [PatientsAppService],
})
export class PatientsAppModule {}
