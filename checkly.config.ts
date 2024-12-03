import { defineConfig } from 'checkly'

const config = defineConfig({
  projectName: 'Axon workshop',
  logicalId: 'logical-id',
  checks: {
    frequency: 10,
    locations: ['us-east-1', 'eu-west-1'],
    runtimeId: '2024.02',
    checkMatch: '**/__checks__/**/*.check.ts',
    playwrightConfig: {},
    browserChecks: {
      testMatch: '**/__checks__/**/*.spec.ts',
    },
  },
  cli: {
    runLocation: 'us-east-1',
    reporters: ['list'],
    retries: 0,
  },
})

export default config