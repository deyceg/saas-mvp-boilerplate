import {
  INestApplication,
  Injectable,
  ValidationPipe,
  ValidationPipeOptions,
} from '@nestjs/common';
import {
  SwaggerDocumentOptions,
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';
import { Environment } from './common/environment';
import * as fs from 'fs';
import orval from 'orval';

@Injectable()
export class AppService {}
