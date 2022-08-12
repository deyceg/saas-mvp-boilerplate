import { test, expect } from '@playwright/test';

test('Signup flow', async ({ page, context }) => {
  context.on('serviceworker', () => console.log('service worker regstered'));

  page.on('console', async (msg) => {
    const values = [];
    for (const arg of msg.args()) values.push(await arg.jsonValue());
    console.log(...values);
  });
  page.on('request', (request) =>
    console.log('>>', request.method(), request.url()),
  );
  page.on('response', (response) =>
    console.log('<<', response.status(), response.url()),
  );

  await page.goto('https://localhost:3000/signup', {
    waitUntil: 'networkidle',
  });

  await expect(page.locator('text=Sign Up')).toBeDefined();

  // create a locator
  await page.locator('#email').fill('deyna@mintsrc.co.uk');
  await page.locator('#firstName').fill('Deyna');
  await page.locator('#lastName').fill('Cegielski');
  await page.locator('#password').fill('abc123XYZ!£$');
  await page.locator('#confirmPassword').fill('abc123XYZ!£$');
  await page.locator('button >> text=Sign Up').click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/home/);
});
