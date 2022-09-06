import { Test, TestingModule } from '@nestjs/testing';
import { KontaktController } from './kontakt.controller';
import { KontaktService } from './kontakt.service';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { mockPrisma } from '../mocks/mockPrisma';
import { Kontakt } from '../interfaces/kontakt';

describe('KontaktController', () => {
  let controller: KontaktController;
  let service: KontaktService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KontaktController],
      providers: [KontaktService, PrismaService, ConfigService],
    })
    .overrideProvider(PrismaService)
    .useValue(mockPrisma)
    .compile();

    controller = module.get<KontaktController>(KontaktController);
    service = module.get<KontaktService>(KontaktService); 
    prisma = module.get<PrismaService>(PrismaService);

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe("Kontakt Controller", () => {
    it('should return taras', () => {
      console.log(prisma.kontakt.findMany());
      console.log(prisma.profile.findMany());
    })
  });
});


