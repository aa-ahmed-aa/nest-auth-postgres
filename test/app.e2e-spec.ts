import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { LoginService } from '../src/login/login.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const loginUserResponse = {
    expiresIn: 123,
    accessToken: 'fudy123',
    user: {
      name: 'Ahmed Khaled',
      email: 'aaahmed@ahmed.com',
      id: 35,
    },
    status: 200,
  };

  const loginService = {
    login: () => loginUserResponse,
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(LoginService)
      .useValue(loginService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it(`POST [ register new user ] /user`, () => {
    const payload = {
      name: 'Ahmed Khaled',
      email: 'ahmed@ahmed.com',
      password: 'ahmedkhaled',
    };

    const response = {
      status: 200,
      response: 'Successfully registered new user!',
    };

    return request(app.getHttpServer())
      .post('/user')
      .send(payload)
      .expect(HttpStatus.OK)
      .expect(response);
  });

  it(`POST [ login user using email ] /auth/login`, () => {
    const payload = {
      email: 'aaahmed@ahmed.com',
      password: 'ahmedkhaled',
    };

    return request(app.getHttpServer())
      .post('/auth/login')
      .send(payload)
      .expect(HttpStatus.CREATED)
      .expect(loginService.login());
  });

  it(`GET [ 401 Unauthorized ] /auth/me`, () => {
    const token = loginUserResponse.accessToken;

    return request(app.getHttpServer())
      .get('/auth/me')
      .expect(HttpStatus.UNAUTHORIZED)
      .expect({
        statusCode: HttpStatus.UNAUTHORIZED,
        message: 'Unauthorized',
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
