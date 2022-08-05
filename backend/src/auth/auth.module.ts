import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import {
  PrometheusModule,
  makeCounterProvider,
} from '@willsoto/nestjs-prometheus';
import {
  DataSourceEnum,
  FeatureToggleGuard,
  FeatureToggleModule,
} from '@rafaelortegabueno/nestjs-feature-toggle';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    FeatureToggleModule.register({
      dataSource: DataSourceEnum.MODULE_CONFIG,
      featureSettings: [
        {
          name: 'FEATURE_ALLOW_SIGNUP',
          value: true,
        },
      ],
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: FeatureToggleGuard,
    },
    makeCounterProvider({
      name: 'signup_total',
      help: 'Total number of successful signups',
    }),
    AuthService,
  ],
})
export class AuthModule {}
