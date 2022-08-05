import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { createSignupRequest } from '../../../test/factory';
import { BadRequestResponse } from '../../../src/common/http-utils';
import { EntityManager, Repository } from 'typeorm';
import { User } from '../../../src/auth/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgreSqlContainer } from 'testcontainers';
import { Client } from 'pg';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

const TEST_SUITE = 'signup';

describe('signup', () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;
  let userRepository: Repository<User>;
  let entityManager: EntityManager;

  beforeAll(async () => {
    // const container = await new PostgreSqlContainer().start();

    // const client = new Client({
    //   host: container.getHost(),
    //   port: container.getPort(),
    //   database: container.getDatabase(),
    //   user: container.getUsername(),
    //   password: container.getPassword(),
    // });
    // await client.connect();

    // const result = await client.query('SELECT 1');
    // expect(result.rows[0]).toEqual({ '?column?': 1 });

    moduleFixture = await Test.createTestingModule({
      imports: [
        AppModule,
        // TypeOrmModule.forRoot({
        //   type: 'postgres',
        //   host: 'postgres.local',
        //   port: 5432,
        //   username: 'postgres',
        //   password: 'postgres',
        //   database: 'zoomees',
        //   entities: [User],
        //   synchronize: true,
        // }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
    userRepository = moduleFixture.get('UserRepository');
    entityManager = userRepository.manager;
    expect(entityManager.connection.isInitialized).toBe(true);
  });

  afterAll(async () => {
    await entityManager.query('TRUNCATE TABLE "public"."user" CASCADE;');
    await app.close();
  });

  test('success', () => {
    const payload = createSignupRequest();

    return request(app.getHttpServer())
      .post('/auth/signup')
      .send(payload)
      .expect(200)
      .expect((res) => {
        expect(res.body.accessToken).toBeDefined();
      });
  });

  test('validation errors', () => {
    const payload = createSignupRequest({
      email: 'foo',
      firstName: '!',
      lastName: '!',
      password: 'a',
    });

    return request(app.getHttpServer())
      .post('/auth/signup')
      .send(payload)
      .expect(400)
      .expect(({ body }: any) => {
        expect(
          <BadRequestResponse>body.message.some((v) => v.match(/email/)),
        ).toBe(true);
        expect(
          <BadRequestResponse>body.message.some((v) => v.match(/password/)),
        ).toBe(true);
        expect(
          <BadRequestResponse>body.message.some((v) => v.match(/firstName/)),
        ).toBe(true);
        expect(
          <BadRequestResponse>body.message.some((v) => v.match(/lastName/)),
        ).toBe(true);
      });
  });

  test('metrics', () => {
    return request(app.getHttpServer())
      .get('/metrics')
      .expect(200)
      .expect((res) => {
        expect(res.text).toMatch('http_request_duration_seconds');
        expect(res.text).toMatch('signup_total');
      });
  });
});
