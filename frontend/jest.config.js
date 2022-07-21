// const { pathsToModuleNameMapper } = require('ts-jest/utils');
// const { compilerOptions } = require('../tsconfig.json');

// const paths = compilerOptions.paths ? compilerOptions.paths : {};

module.exports = {
  rootDir: 'src',
  //   setupFilesAfterEnv: ['jest.setup.ts'],
  //   testPathIgnorePatterns: [
  //     '<rootDir>/.next/',
  //     '<rootDir>/node_modules/',
  //     '<rootDir>/cypress/',
  //     '<rootDir>/webdriverio/',
  //   ],
  moduleNameMapper: {
    // ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>/' }),
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  testRegex: '.*\\.(spec|test)\\.tsx$',
  //   moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
};
