import path from 'path';
import { CWD, DOCS_DIR_NAME, EXAMPLE_DIR_NAME, TESTS_DIR_NAME } from './../shared/constant';
import { pathExistsSync } from 'fs-extra';

const getRootConfig = () => {
  const file = path.resolve(CWD, 'jest.config.js');
  if (pathExistsSync(file)) {
    delete require.cache[require.resolve(file)];
    return require(file);
  }
  return {};
};

module.exports = {
  transform: {
    '\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    `!**/${EXAMPLE_DIR_NAME}/**`,
    `!**/${DOCS_DIR_NAME}/**`,
    `!**/${TESTS_DIR_NAME}/**`,
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  ...getRootConfig(),
};
