// export default {
//   port: process.env.PORT || 3001,
// };

import { IsNumber } from 'class-validator';

export class HttpConf {
  @IsNumber()
  public readonly port!: number;
}
