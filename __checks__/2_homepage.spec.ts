import { test, expect } from '@playwright/test'

test('Axon homepage', async ({ page }) => {
  const response = await page.goto('https://www.axon.com/')
  expect(response?.status()).toBeLessThan(400)
  await expect(page).toHaveTitle('Axon | Protect Life - Axon.com')
  await page.screenshot({ path: 'homepage.jpg' })
})
