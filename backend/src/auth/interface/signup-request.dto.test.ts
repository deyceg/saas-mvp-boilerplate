// import { ValidationPipe, ArgumentMetadata } from '@nestjs/common';
// import { ValidationError } from 'class-validator';
// import { createSignupRequest } from '../factory';
// import { SignupRequest } from './signup-request.dto';

// describe('SignupRequest DTO', () => {
//   it('validate', async () => {
//     const target: ValidationPipe = new ValidationPipe({
//       transform: true,
//       whitelist: true,
//     });
//     const metadata: ArgumentMetadata = {
//       type: 'body',
//       metatype: SignupRequest,
//       data: '',
//     };
//     await target
//       .transform(
//         createSignupRequest({
//           email: 'foo',
//           firstName: '!',
//           lastName: '!',
//           password: 'a',
//         }),
//         metadata,
//       )
//       .catch((err) => {
//         expect(err.getResponse().message.some((v) => v.match(/email/))).toBe(
//           true,
//         );
//         expect(err.getResponse().message.some((v) => v.match(/password/))).toBe(
//           true,
//         );
//         expect(
//           err.getResponse().message.some((v) => v.match(/firstName/)),
//         ).toBe(true);
//         expect(err.getResponse().message.some((v) => v.match(/lastName/))).toBe(
//           true,
//         );
//       });
//   });
// });
