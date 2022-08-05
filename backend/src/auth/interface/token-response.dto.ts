import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { JwtToken } from './jwt-token';

export class TokenResponse {
  /**
   * JWT token
   */
  @IsString()
  accessToken: string;
}
