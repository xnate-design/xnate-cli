import path from 'path';
import {
  CWD,
  DOCS_DIR_NAME,
  EXAMPLE_DIR_NAME,
  JEST_MEDIA_MOCK,
  JEST_STYLE_MOCK,
  TESTS_DIR_NAME,
} from './../shared/constant';
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
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': JEST_STYLE_MOCK,
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': JEST_MEDIA_MOCK,
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    `!**/${EXAMPLE_DIR_NAME}/**`,
    `!**/${DOCS_DIR_NAME}/**`,
    `!**/${TESTS_DIR_NAME}/**`,
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testEnvironment: 'jsdom',
  ...getRootConfig(),
};
