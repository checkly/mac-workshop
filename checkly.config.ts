import { defineConfig } from 'checkly'

const config = defineConfig({
  projectName: 'MaC workshop',
  repoUrl: 'https://github.com/checkly/mac-workshop',
  logicalId: 'mac-workshop-2024-1',
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