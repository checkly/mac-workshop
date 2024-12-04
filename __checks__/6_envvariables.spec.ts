import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('https://danube-web.shop/')
  await page.getByRole('button', { name: 'Log in' }).click()
  await page.getByPlaceholder('Email').fill(process.env.USER_EMAIL as string)
  await page.getByPlaceholder('Password').fill(process.env.USER_PASSWORD as string)
  await page.getByRole('button', { name: 'Sign In' }).click()
  await expect(page.locator('#login-message'))
    .toContainText('Welcome back, user@email.com')
})