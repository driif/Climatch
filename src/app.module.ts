import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { AdministrationService } from './admin/administration/administration.service';
import { AdministrationController } from './admin/administration/administration.controller';
import { ProfileModule } from './profile/profile.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { KontaktModule } from './kontakt/kontakt.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '/public'),
    }),
    UserModule,
    AuthModule,
    PrismaModule,
    ProfileModule,
    KontaktModule,
  ],
  providers: [AdministrationService],
  controllers: [AdministrationController],
})
export class AppModule {}
