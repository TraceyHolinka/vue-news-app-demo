module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx"
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/**/**/*.test.(js|jsx|ts|tsx)|'],
  testURL: 'http://localhost/',
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname']
}
