import { test, expect } from '@playwright/test'

// Environment variables come in three flavors:
// - local, Node.js environment variables
// - ephermal, Checkly environment variables set by the `-e` option or `--env-file` option
// - stored, Checkly environment variables stored in the Checkly cloud. You can set them with `npx checkly env`

test('test', async ({ page }) => {
  await page.goto('https://danube-web.shop/')
  await page.getByRole('button', { name: 'Log in' }).click()
  await page.getByPlaceholder('Email').fill(process.env.USER_EMAIL as string)
  await page.getByPlaceholder('Password').fill(process.env.USER_PASSWORD as string)
  await page.getByRole('button', { name: 'Sign In' }).click()
  await expect(page.locator('#login-message'))
    .toContainText('Welcome back, user@email.com')
})