import { Module } from '@nestjs/common';
import { DoctorsAppController } from './doctors-app.controller';
import { DoctorsAppService } from './doctors-app.service';

@Module({
  imports: [],
  controllers: [DoctorsAppController],
  providers: [DoctorsAppService],
})
export class DoctorsAppModule {}
