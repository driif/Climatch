import { Test, TestingModule } from '@nestjs/testing';
import { AdministrationController } from './administration.controller';
import { AdministrationService } from './administration.service';
import { PrismaService } from '../../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';



describe('AdministrationController', () => {
  let controller: AdministrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdministrationController],
      providers: [AdministrationService, PrismaService, ConfigService],
    }).compile();

    controller = module.get<AdministrationController>(AdministrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
