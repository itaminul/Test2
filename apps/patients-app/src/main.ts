import { NestFactory } from '@nestjs/core';
import { PatientsAppModule } from './patients-app.module';

async function bootstrap() {
  const app = await NestFactory.create(PatientsAppModule);
  await app.listen(process.env.port ?? 3004);
}
bootstrap();
