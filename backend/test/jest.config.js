module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  roots: ['../src', '.'],
  testRegex: '.*\\.(spec|test)\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testEnvironment: 'node',
};
