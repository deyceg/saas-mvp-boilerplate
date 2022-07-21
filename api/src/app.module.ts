import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
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
import configuration from './common/conf/configuration';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { TypedConfigModule, fileLoader, selectConfig } from 'nest-typed-config';
import * as path from 'path';
import { AppConf } from './conf';
import { HttpConf } from './conf/http';

// const { NODE_ENV } = process.env;
// ConfigService.rootPath = path.resolve(__dirname, '..');

// export const conf = TypedConfigModule.forRoot({
//   schema: AppConf,
//   load: fileLoader(),
// });

// export const routeConfig = selectConfig(conf, HttpConf);

@Module({
  imports: [
    TypedConfigModule.forRoot({
      schema: AppConf,
      load: fileLoader(),
    }),
    // ConfigModule.load(path.resolve('config', '**/!(*.d).{ts,js}'), {
    //   path: path.resolve(
    //     process.cwd(),
    //     !NODE_ENV ? '.env' : `.env.${NODE_ENV}`,
    //   ),
    // }),
    // ConfigModule.load(path.resolve(__dirname, 'conf', '**/!(*.d).{ts,js}')),
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   load: [configuration],
    // }),
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
