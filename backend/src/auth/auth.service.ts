import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Builder } from 'builder-pattern';
import { LoginRequest, SignupRequest } from './interface';
import { JwtToken } from './interface/jwt-token';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter } from 'prom-client';
import DuplicateResourceError from './error/duplicate-resource.error';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  createToken(user: User): string {
    return `sub:${user.id}`;
  }

  async registerUser(signupRequest: SignupRequest): Promise<string> {
    const u = Builder(User, signupRequest).build();

    if (
      await this.userRepository.findOne({
        where: [{ email: u.email }, { username: u.username }],
      })
    ) {
      throw new DuplicateResourceError<User>(User, u.email);
    }

    const nu = await this.userRepository.save(u);

    return this.createToken(nu);
  }

  async login(loginRequest: LoginRequest): Promise<string> {
    const u = Builder(User, loginRequest).build();

    const user = await this.userRepository.findOne({
      where: [{ email: u.email }, { username: u.username }],
    });

    if (!user) {
      throw new BadRequestException();
    }

    return this.createToken(user);
  }
}
