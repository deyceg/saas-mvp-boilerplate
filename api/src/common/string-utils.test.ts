import { capitalizeFirst } from './string-utils';

describe('string-utils', () => {
  test('capitalizeFirst', () => {
    expect(capitalizeFirst('foo')).toBe('Foo');
    expect(capitalizeFirst()).toBe('');
    expect(capitalizeFirst(null)).toBe('');
    expect(capitalizeFirst(undefined)).toBe('');
  });
});
