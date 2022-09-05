import { Test, TestingModule } from '@nestjs/testing';
import { KontaktService } from './kontakt.service';
import { Kontakt } from '../interfaces/kontakt';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';


describe('KontaktService', () => {
  let service: KontaktService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KontaktService, PrismaService, ConfigService],
    }).compile();

    service = module.get<KontaktService>(KontaktService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
