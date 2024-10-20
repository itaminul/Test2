import { Test, TestingModule } from '@nestjs/testing';
import { DoctorsAppController } from './doctors-app.controller';
import { DoctorsAppService } from './doctors-app.service';

describe('DoctorsAppController', () => {
  let doctorsAppController: DoctorsAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DoctorsAppController],
      providers: [DoctorsAppService],
    }).compile();

    doctorsAppController = app.get<DoctorsAppController>(DoctorsAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(doctorsAppController.getHello()).toBe('Hello World!');
    });
  });
});
