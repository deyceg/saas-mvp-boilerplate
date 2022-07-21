import { Type } from 'class-transformer';
import { Allow } from 'class-validator';
import { HttpConf } from './http';

export class AppConf {
  @Type(() => HttpConf)
  @Allow()
  public readonly http!: HttpConf;
}
