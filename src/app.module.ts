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

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'dist/frontend'),
    }),
    UserModule,
    AuthModule,
    PrismaModule,
    ProfileModule,
  ],
  providers: [AdministrationService],
  controllers: [AdministrationController],
})
export class AppModule {}
