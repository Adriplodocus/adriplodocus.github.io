const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 1440 });
  await page.goto('http://localhost:3000/PersonalProjects.html');
  // Wait for images and scripts to load
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'verification/personal_projects_check.png', fullPage: true });
  await browser.close();
})();
