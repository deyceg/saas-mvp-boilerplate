import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FeatureEnabled } from '@rafaelortegabueno/nestjs-feature-toggle';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter } from 'prom-client';
import { AuthService } from './auth.service';
import { LoginRequest, SignupRequest, TokenResponse } from './interface';

const CONTROLLER_NAME = 'auth';
@ApiTags(CONTROLLER_NAME)
@Controller(CONTROLLER_NAME)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    @InjectMetric('signup_total') public signupCounter: Counter<string>,
  ) {}

  @Post('/login')
  @HttpCode(200)
  async login(@Body() loginRequest: LoginRequest): Promise<TokenResponse> {
    const res = Promise.resolve({
      accessToken: await this.authService.login(loginRequest),
    });

    return res;
  }

  @Post('/signup')
  @FeatureEnabled('FEATURE_ALLOW_SIGNUP')
  @HttpCode(200)
  async signup(@Body() signupRequest: SignupRequest): Promise<TokenResponse> {
    const res = Promise.resolve({
      accessToken: await this.authService.registerUser(signupRequest),
    });

    this.signupCounter.inc();

    return res;
  }
}
