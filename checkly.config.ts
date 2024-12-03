import { defineConfig } from 'checkly'

const config = defineConfig({
  projectName: 'Axon workshop',
  repoUrl: 'https://github.com/checkly/axon-workshop',
  logicalId: 'logical-id',
  checks: {
    runtimeId: '2024.09',
    frequency: 10,
    locations: ['us-east-1', 'eu-west-1'],
    checkMatch: '**/__checks__/**/*.check.ts',
    browserChecks: {
      testMatch: '**/__checks__/**/*.spec.ts',
    },
  },
  cli: {
    runLocation: 'us-east-1',
    reporters: ['list']
  },
})

export default config