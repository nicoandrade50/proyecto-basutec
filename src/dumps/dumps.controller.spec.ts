import { Test, TestingModule } from '@nestjs/testing';
import { DumpsController } from './dumps.controller';
import { DumpsService } from './dumps.service';

describe('DumpsController', () => {
  let controller: DumpsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DumpsController],
      providers: [DumpsService],
    }).compile();

    controller = module.get<DumpsController>(DumpsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
