const puppeteer = require('puppeteer');

// NOTE: github will prefix with `INPUT_`
// https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputs
const {
  INPUT_HN_USERNAME,
  INPUT_HN_PASSWORD,
  INPUT_POST_TITLE,
  INPUT_POST_URL,
} = process.env;

const login = async (page) => {
  await page.type('input[name=acct][type=text]', INPUT_HN_USERNAME, { delay: userTypeDelay });
  await page.type('input[type=password]', INPUT_HN_PASSWORD, { delay: userTypeDelay });
  await page.click('input[type=submit][value=login]');
}

const post = async (page) => {
  await page.goto('https://news.ycombinator.com/submit');
  await page.type('input[name=title][type=text]', INPUT_POST_TITLE, { delay: userTypeDelay });
  await page.type('input[name=url][type=url]', INPUT_POST_URL, { delay: userTypeDelay });
  await page.click('input[type=submit][value=submit]');
}

try {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://news.ycombinator.com/login');

    const userTypeDelay = Math.floor(100 + (Math.random() * 50));
    const userInputDelay = userTypeDelay * 10;
    await page.waitForTimeout(userInputDelay);

    await login(page);
    await page.waitForTimeout(userInputDelay);

    await post(page);
    await page.waitForTimeout(userInputDelay);
    await browser.close();

    console.log(`Successfully submitted ${INPUT_POST_TITLE}, ${INPUT_POST_URL}`);
    process.exit(0);
  })();
} catch(e) {
  console.error(e);
  process.exit(1);
}
