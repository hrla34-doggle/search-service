module.exports = {
  clearMocks: true,

  collectCoverage: true,


  coverageDirectory: 'coverage',


  moduleDirectories: [
    'node_modules',
  ],

  moduleFileExtensions: ['js', 'jsx'],


  setupFilesAfterEnv: ['jest-enzyme'],

  testEnvironment: 'enzyme',

  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },

  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|@react-navigation/(.*)|bs-platform)',
  ],

  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.jsx$': 'babel-jest',
  },

  verbose: true,

};
