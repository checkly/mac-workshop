import { test, expect } from '@playwright/test'

test('Checkly homepage', async ({ page }) => {
  const response = await page.goto('https://www.checklyhq.com/welcome')
  expect(response?.status()).toBeLessThan(400)
  await expect(page).toHaveTitle('Build and Run Synthetics That Scale')
})
