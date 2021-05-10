module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  },
  moduleFileExtensions: ["js", "ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: ["**/test/**/*.test.(ts|js)"],
  testEnvironment: "node",
  preset: "ts-jest",
  reporters: ["default", "jest-junit"]
};
