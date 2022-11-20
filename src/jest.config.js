module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  testEnvironment: "jsdom"
};