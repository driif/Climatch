import { Test, TestingModule } from '@nestjs/testing';
import { KontaktService } from './kontakt.service';

describe('KontaktService', () => {
  let service: KontaktService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KontaktService],
    }).compile();

    service = module.get<KontaktService>(KontaktService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
