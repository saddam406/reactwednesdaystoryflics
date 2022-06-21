const jestConfig = {
  verbose: true,
  testURL: "http://localhost:8080/",
  'transform': {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/__tests__/*.js?(x)'],
}

module.exports = jestConfig
