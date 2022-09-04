import { Test, TestingModule } from '@nestjs/testing';
import { KontaktController } from './kontakt.controller';

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
