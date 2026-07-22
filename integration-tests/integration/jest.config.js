const { loadEnv } = require("@medusajs/utils")
loadEnv("test", process.cwd())

const baseConfig = {
  rootDir: __dirname,
  transform: {
    "^.+\\.[jt]s$": [
      "@swc/jest",
      {
        jsc: {
          parser: { syntax: "typescript", decorators: true },
          target: "es2021",
        },
      },
    ],
  },
  testEnvironment: "node",
  moduleFileExtensions: ["js", "mjs", "ts", "json"],
  modulePathIgnorePatterns: ["dist/", "<rootDir>/.medusa/"],
}

if (process.env.TEST_TYPE === "integration:modules") {
  module.exports = {
    ...baseConfig,
    testMatch: ["**/__tests__/modules/*.spec.[jt]s"],
    setupFiles: ["./setup.js"],
  }
} else {
  module.exports = {
    ...baseConfig,
    testMatch: ["**/__tests__/http/*.spec.[jt]s"],
    setupFiles: ["./setup.js"],
  }
}
