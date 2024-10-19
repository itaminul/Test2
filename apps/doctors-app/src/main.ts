import { NestFactory } from '@nestjs/core';
import { DoctorsAppModule } from './doctors-app.module';

async function bootstrap() {
  const app = await NestFactory.create(DoctorsAppModule);
  await app.listen(process.env.port ?? 3003);
}
bootstrap();
