import { IsEmail, IsString } from 'class-validator';

export class LoginRequest {
  /**
   * A username
   * @example ['foo']
   */
  @IsEmail()
  username: string;

  /**
   * A password
   * @example ['bar']
   */
  @IsString()
  password: string;
}
