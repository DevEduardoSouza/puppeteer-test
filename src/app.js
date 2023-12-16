import { selectors, initBrowser, urls } from "./config/configs.js";
import requisitions from "./service/requisitions.js";
import accounts from "./data/accounts.json" assert { type: "json" };
import { email } from "./models/email.js";

const app = async () => {
  const browser = await initBrowser();

  const page = await browser.newPage();
  // await page.goto(urls.loginAccountGoogle);

  for (const account of accounts) {
    requisitions
      .getByEmail(`${encodeURIComponent(account.email)}`)
      .then((result) => {
        if (!result) {
          console.log(`Email ainda não está no database ${account.email}`);
        }
        email.login(account, page);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // await browser.close();
};

app();
