import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  PrometheusModule,
  makeCounterProvider,
} from '@willsoto/nestjs-prometheus';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import * as promBundle from 'express-prom-bundle';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres.local',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'zoomees',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PrometheusModule.register({
      defaultLabels: {
        svc: 'api',
      },
      path: '/metrics',
    }),
    AuthModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(promBundle({ includePath: true })).forRoutes(AuthController);
  }
}
