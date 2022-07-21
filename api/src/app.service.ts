import {
  INestApplication,
  Injectable,
  OnApplicationBootstrap,
  ValidationPipe,
  ValidationPipeOptions,
} from '@nestjs/common';
import {
  SwaggerDocumentOptions,
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';
import { Environment } from './common/conf/environment';
import * as fs from 'fs';
import orval from 'orval';
import { AppConf } from './conf';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(private config: AppConf) {}
  onApplicationBootstrap() {
    this.show();
  }

  public show(): any {
    const out = [`root.http.port: ${this.config.http.port}`].join('\n');

    console.log(`${out}\n`);
  }
}
