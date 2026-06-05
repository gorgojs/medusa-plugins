const { loadEnv } = require("@medusajs/utils")
loadEnv("test", process.cwd())

/**
 * MSW v2 ships several ESM-only dependencies (rettime, @bundled-es-modules/*,
 * until-async, outvariant, strict-event-emitter, etc). Jest does not transform
 * `node_modules` by default, so we explicitly whitelist these packages so the
 * SWC transformer can compile them down to CJS.
 */
const esmPackagesToTransform = [
  "msw",
  "@mswjs",
  "@bundled-es-modules",
  "rettime",
  "until-async",
  "outvariant",
  "strict-event-emitter",
  "is-node-process",
  "headers-polyfill",
  "@open-draft",
]

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
    "^.+\\.mjs$": [
      "@swc/jest",
      {
        jsc: {
          parser: { syntax: "ecmascript" },
          target: "es2021",
        },
        module: { type: "commonjs" },
      },
    ],
  },
  testEnvironment: "node",
  moduleFileExtensions: ["js", "mjs", "ts", "json"],
  modulePathIgnorePatterns: ["dist/", "<rootDir>/.medusa/"],
  transformIgnorePatterns: [
    `/node_modules/(?!(${esmPackagesToTransform.join("|")})/)`,
  ],
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
