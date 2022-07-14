import { faker } from '@faker-js/faker';
import { SignupRequest } from '../../src/auth/interface';

export const createSignupRequest = (
  req?: Partial<SignupRequest>,
): SignupRequest => {
  return {
    email: req?.email ?? faker.internet.email(),
    username: req?.username ?? faker.internet.userName(),
    password: req?.password ?? faker.internet.password(),
    firstName: req?.firstName ?? faker.name.firstName(),
    lastName: req?.lastName ?? faker.name.lastName(),
  };
};
