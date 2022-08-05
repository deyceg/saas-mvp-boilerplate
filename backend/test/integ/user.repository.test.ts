import { Test, TestingModule } from '@nestjs/testing';
import { Builder } from 'builder-pattern';
import { EntityManager, Repository } from 'typeorm';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { createSignupRequest } from '../../test/factory';
import { User } from '../../src/auth/entities/user.entity';

describe('UserRepository', () => {
  let entityManager: EntityManager;
  let repository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          dropSchema: true,
          entities: [User],
          synchronize: true,
          autoLoadEntities: true,
          keepConnectionAlive: false,
        }),
        TypeOrmModule.forFeature([User])
      ],
     }).compile();

    //repository = module.get<Repository<User>>(getRepositoryToken(User));
    repository = module.get('UserRepository');
    entityManager = repository.manager;
  });

  afterEach(async () => {
    await entityManager.connection.destroy();
  });

  test('should be defined', () => {
    expect(repository).toBeDefined();
  });

  test('save user', async () => {
    const u = Builder(User, createSignupRequest()).build();
    const nu = await repository.save(u);

    const au = await repository.findOne({ where: { id: nu.id } });

    expect(u.username).toEqual(au.username);
  });
});
