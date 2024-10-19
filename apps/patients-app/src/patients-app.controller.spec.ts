import { Test, TestingModule } from '@nestjs/testing';
import { PatientsAppController } from './patients-app.controller';
import { PatientsAppService } from './patients-app.service';

describe('PatientsAppController', () => {
  let patientsAppController: PatientsAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PatientsAppController],
      providers: [PatientsAppService],
    }).compile();

    patientsAppController = app.get<PatientsAppController>(PatientsAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(patientsAppController.getHello()).toBe('Hello World!');
    });
  });
});
