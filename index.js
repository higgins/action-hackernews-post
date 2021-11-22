const puppeteer = require('puppeteer');

// NOTE: github will prefix with `INPUT_`
// https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputs
const {
  INPUT_HN_USERNAME,
  INPUT_HN_PASSWORD,
  INPUT_POST_TITLE,
  INPUT_POST_URL,
} = process.env;

const USER_TYPE_DELAY = Math.floor(100 + (Math.random() * 50));
const USER_PAGE_WAIT = USER_TYPE_DELAY * 10;

const login = async (page) => {
  await page.type('input[name=acct][type=text]', INPUT_HN_USERNAME, { delay: USER_TYPE_DELAY });
  await page.type('input[type=password]', INPUT_HN_PASSWORD, { delay: USER_TYPE_DELAY });
  await page.click('input[type=submit][value=login]');
}

const post = async (page) => {
  await page.goto('https://news.ycombinator.com/submit');
  await page.type('input[name=title][type=text]', INPUT_POST_TITLE, { delay: USER_TYPE_DELAY });
  await page.type('input[name=url][type=url]', INPUT_POST_URL, { delay: USER_TYPE_DELAY });
  await page.click('input[type=submit][value=submit]');
}

try {
  (async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-dev-shm-usage'] });
    const page = await browser.newPage();
    await page.goto('https://news.ycombinator.com/login');

    await page.waitForTimeout(USER_PAGE_WAIT);

    await login(page);
    await page.waitForTimeout(USER_PAGE_WAIT);

    await post(page);
    await page.waitForTimeout(USER_PAGE_WAIT);
    await browser.close();

    console.log(`Successfully submitted ${INPUT_POST_TITLE}, ${INPUT_POST_URL}`);
    process.exit(0);
  })();
} catch(e) {
  console.error(e);
  process.exit(1);
}
