const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const serverUrl = 'http://localhost:8000';

  try {
    await page.goto(`${serverUrl}/index.html`);
    console.log('Page loaded');

    // Check initial language (default en)
    const titleEn = await page.title();
    console.log(`Initial title: ${titleEn}`);

    // Check tooltip (title attribute) for Home link
    const homeLinkTitleEn = await page.getAttribute('#nav-home', 'title');
    console.log(`Home link title (EN): ${homeLinkTitleEn}`);

    // Switch to Spanish
    await page.click('button:has-text("ES")');
    console.log('Switched to Spanish');

    // Check translated title
    const titleEs = await page.title();
    console.log(`Spanish title: ${titleEs}`);

    // Check translated tooltip for Home link
    const homeLinkTitleEs = await page.getAttribute('#nav-home', 'title');
    console.log(`Home link title (ES): ${homeLinkTitleEs}`);

    // Check specific translation
    const introText = await page.textContent('[data-i18n="hi-i-am"]');
    console.log(`Intro text (ES): ${introText}`);

    // Navigate to PersonalProjects.html
    await page.goto(`${serverUrl}/PersonalProjects.html`);
    console.log('Navigated to Personal Projects');

    // Check persistence
    const ppTitleEs = await page.title();
    console.log(`Personal Projects title (ES): ${ppTitleEs}`);

    // Check itch link tooltip
    const itchLinkTitleEs = await page.getAttribute('a[data-i18n="try-it-out"]', 'title');
    console.log(`Itch link title (ES): ${itchLinkTitleEs}`);

    await page.screenshot({ path: 'verify_final_en.png' });

    // Switch back to English
    await page.click('button:has-text("EN")');
    const ppTitleEn = await page.title();
    console.log(`Personal Projects title (EN): ${ppTitleEn}`);

    await page.screenshot({ path: 'verify_final_es.png' });

  } catch (error) {
    console.error('Verification failed:', error);
  } finally {
    await browser.close();
  }
})();
