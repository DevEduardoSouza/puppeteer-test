import { selectors, initBrowser, urls } from "./config/configs.js";
import requisitions from "./service/requisitions.js";
import accounts from "./data/accounts.json" assert { type: "json" };

import { email } from "./models/email.js";

const app = async () => {
  const browser = await initBrowser();

  const page = await browser.newPage();

  const promises = accounts.map(async (account) => {
    try {
      const result = await requisitions.getByEmail(`${encodeURIComponent(account.email)}`);
      if (!result) {
        console.log(`Email ainda não está no database ${account.email}`);
        return;
      }
      await email.login(account, page);
    } catch (error) {
      console.log(error);
    }
  });

  await Promise.all(promises);

  await browser.close();
};

app();
