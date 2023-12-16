import { selectors, urls } from "./config/configs.js";

export default email = {
  login: async (account, page) => {
    await page.goto(urls.loginAccountGoogle);
  },
};
