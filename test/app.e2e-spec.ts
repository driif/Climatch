import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { AuthDto, EditUserDto } from '../src/dto';

describe('App e2e test', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(3333);

    prisma = app.get(PrismaService);
    await prisma.clearDatabase();
  });
  afterAll(async () => {
    await app.close();
  });

  describe('Auth', () => {
    const dto: AuthDto = {
      email: 'useremail@user.de',
      password: 'password',
    };
    describe('Signup', () => {
      it('should throw exception if email empty', () => {

      });

      it('should throw exception if password empty', () => {

      });

      it('should throw exception if no Body provided', () => {

      });

      it('should signup a new user', () => {

      });
    });

    describe('Signin', () => {
      it('should throw exception if email empty', () => {

      });

      it('should throw exception if password empty', () => {

      });

      it('should throw exception if no Body provided', () => {

      });

      it('should signin a user', () => {

      });
    });

    describe('User', () => {
      describe('Get me', () => {
        it('should get current user', () => {

        });
      });
      describe('Edit user', () => {
        it('should edit current user', () => {
          const dto: EditUserDto = {
            firstName: 'newTestName',
            email: 'test@email.com',
          };

        });
      });
      describe('Delete user', () => { });
    });

    describe('Bookmarks', () => {
      describe('Create bookmark', () => { });
      describe('Get bookmarks', () => { });
      describe('Get bookmark by id', () => { });
      describe('Edit bookmark', () => { });
      describe('Delete bookmark', () => { });
    });
  });
});
