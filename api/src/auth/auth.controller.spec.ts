import { Test, TestingModule } from '@nestjs/testing';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { Counter } from 'prom-client';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { makeCounterProvider, getToken } from '@willsoto/nestjs-prometheus';
import { Builder } from 'builder-pattern';
import { createSignupRequest } from '../../test/factory';
import { User } from './entities/user.entity';
import { APP_GUARD } from '@nestjs/core';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;
  let counter: Counter<string>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        // {
        //   provide: APP_GUARD,
        //   useValue: {
        //     canActivate: jest.fn(),
        //   },
        // },
        makeCounterProvider({
          name: 'signup_total',
          help: 'Total number of successful signups',
        }),
        {
          provide: AuthService,
          useValue: {
            createToken: jest.fn(),
            registerUser: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get(AuthService);
    counter = module.get(getToken('signup_total'));
  });

  test('should be defined', () => {
    expect(controller).toBeDefined();
  });

  test('increment counter', async () => {
    const payload = createSignupRequest();

    const u = Builder(User, payload).id(1).build();

    jest.spyOn(counter, 'inc');
    jest.spyOn(service, 'registerUser').mockResolvedValueOnce({ sub: u.id });
    await controller.signup(payload);

    expect(counter.inc).toBeCalled();
  });
});
