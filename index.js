const puppeteer = require('puppeteer');

// NOTE: if you want to don't use github action, pull these from
// elsewhere
const USERNAME = secrets.HN_USERNAME;
const PASSWORD = secrets.HN_PASSWORD;

const {
  INPUT_POST_TITLE,
  INPUT_POST_URL,
} = process.env;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com/login');

  const userTypeDelay = Math.floor(100 + (Math.random() * 50));
  const userInputDelay = userTypeDelay * 10;
  await page.waitForTimeout(userInputDelay);

  await page.type('input[name=acct][type=text]', USERNAME, { delay: userTypeDelay });
  await page.type('input[type=password]', PASSWORD, { delay: userTypeDelay });
  await page.click('input[type=submit][value=login]');
  await page.waitForTimeout(userInputDelay);

  await page.goto('https://news.ycombinator.com/submit');
  await page.waitForTimeout(userInputDelay);

  await page.type('input[name=title][type=text]', INPUT_POST_TITLE, { delay: userTypeDelay });
  await page.type('input[name=url][type=url]', INPUT_POST_URL, { delay: userTypeDelay });
  await page.click('input[type=submit][value=submit]');

  await page.waitForTimeout(userInputDelay);
  await page.screenshot({ path: 'screenshot.png'});
  await browser.close();
})();
