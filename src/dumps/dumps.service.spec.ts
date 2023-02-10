import { Test, TestingModule } from '@nestjs/testing';
import { DumpsService } from './dumps.service';

describe('DumpsService', () => {
  let service: DumpsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DumpsService],
    }).compile();

    service = module.get<DumpsService>(DumpsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
