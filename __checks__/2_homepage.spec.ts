// This .spec.ts file will be picked up by Checkly and run as a browser check.
// It will use the defaults set in the checkly.config.ts file

import { test, expect } from '@playwright/test'

test('Axon homepage', async ({ page }) => {
  const response = await page.goto('https://www.checklyhq.com/welcome')
  expect(response?.status()).toBeLessThan(400)
  await expect(page).toHaveTitle('Build and Run Synthetics That Scale')
})
