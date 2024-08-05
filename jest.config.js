module.exports = {
  roots: [
    '<rootDir>/application',
    '<rootDir>/caching-fetch-library',
    '<rootDir>/framework/',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
