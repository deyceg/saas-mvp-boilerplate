import DuplicateResourceError from './duplicate-resource.error';
import { User } from '../entities/user.entity';

describe('custom errors', () => {
  test('duplicate resource', () => {
    const err = new DuplicateResourceError<User>(User, 'foo');
    expect(err.clazz.name).toBe('User');
    expect(err.identifer).toBe('foo');
    expect(err.message).toBe('A User already exists with identifier = foo');
  });
});
