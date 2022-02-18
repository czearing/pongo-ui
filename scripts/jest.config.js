// import path from 'path';
// import { fileURLToPath } from 'url';

// const dirname = path.dirname(fileURLToPath(import.meta.url));

// export default {
//   displayName: 'react-storybook',
//   preset: 'ts-jest',
//   collectCoverage: true,
//   setupFilesAfterEnv: ['./config/tests.js'],
//   testMatch: ['<rootDir>/src/**/*.test.ts(x)?'],
//   testPathIgnorePatterns: ['/node_modules/', '/lib/', '/lib-commonjs/', '/dist/'],
// };

import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  displayName: 'react-storybook',
  preset: 'ts-jest',
  collectCoverage: true,
  testEnvironment: 'jest-environment-jsdom-sixteen',
  setupFilesAfterEnv: ['./config/tests.js'],
  testMatch: ['<rootDir>/src/**/*.test.ts(x)?'],
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { configFile: path.resolve(dirname, 'babel.config.js') }],
  },
};
