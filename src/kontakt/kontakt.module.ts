import { Module } from '@nestjs/common';
import { KontaktController } from './kontakt.controller';
import { KontaktService } from './kontakt.service';

@Module({
  controllers: [KontaktController],
  providers: [KontaktService]
})
export class KontaktModule {}
