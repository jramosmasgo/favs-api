import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/node_modules/**"],
  coverageReporters: ["json", "html"],
  collectCoverage: true,
};
export default config;
