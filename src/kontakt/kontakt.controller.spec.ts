import { Test, TestingModule } from '@nestjs/testing';
import { KontaktController } from './kontakt.controller';
import { Kontakt } from '../interfaces/kontakt';
import { KontaktService } from './kontakt.service';
import { PrismaService } from '../prisma/prisma.service';

describe('KontaktController', () => {
  let controller: KontaktController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KontaktController],
    }).compile();

    controller = module.get<KontaktController>(KontaktController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
