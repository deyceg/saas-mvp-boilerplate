import { Test, TestingModule } from '@nestjs/testing';
import { Builder } from 'builder-pattern';
import { Repository } from 'typeorm';
import { AuthService } from './auth.service';
import { User } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { createSignupRequest } from '../../test/factory';
import DuplicateResourceError from './error/duplicate-resource.error';

describe('AuthService', () => {
  let service: AuthService;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: getRepositoryToken(User), useClass: Repository },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('createToken()', () => {
    const u = Builder(User).id(1).build();
    const t = service.createToken(u);
    expect(t.sub).toBe(1);
  });

  test('register()', async () => {
    const payload = createSignupRequest();
    const u = Builder(User, payload).id(1).build();
    jest.spyOn(userRepository, 'findOne').mockResolvedValueOnce(null);
    jest.spyOn(userRepository, 'save').mockResolvedValueOnce(u);
    const t = await service.registerUser(payload);
    expect(t.sub).toBe(1);
  });

  test('register() existing', async () => {
    const payload = createSignupRequest();
    const u = Builder(User, payload).id(1).build();
    jest.spyOn(userRepository, 'findOne').mockResolvedValueOnce(u);
    try {
      await service.registerUser(payload);
    } catch (e) {
      expect(e instanceof DuplicateResourceError).toBe(true);
    }
  });
});
