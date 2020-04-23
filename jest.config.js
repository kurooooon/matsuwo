module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    "^.+\\.svg$": "jest-svg-transformer"
  },
  globals: {
    "GA_ID": "test"
  }
}