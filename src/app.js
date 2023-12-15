import { selectors, initBrowser, urls } from "./config/configs.js";

const app = async () => {
  const browser = await initBrowser();

  const page = await browser.newPage();
  await page.goto(urls.loginAccountGoogle);

  // await browser.close();
};

app();
