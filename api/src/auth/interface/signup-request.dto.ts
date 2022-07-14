import {
  IsAlpha,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MinLength,
} from 'class-validator';

export class SignupRequest {
  /**
   * An email
   * @example ['foo@bar.com']
   */
  @IsEmail()
  email: string;

  /**
   * A username
   * @example ['foo']
   */
  @IsOptional()
  username?: string;

  /**
   * A password
   * @example ['bar']
   */
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  /**
   * First name
   * @example ['Deyna']
   */
  @IsAlpha()
  firstName: string;

  /**
   * First name
   * @example ['Cegielski']
   */
  @IsAlpha()
  lastName: string;
}
