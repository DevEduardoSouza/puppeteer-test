import { selectors, urls, randomTimer } from "../config/configs.js";

export const email = {
  login: async (account, page) => {
    await page.goto(urls.login);
    await page.waitForTimeout(randomTimer());

    
    
    // Login
    await page.waitForSelector(selectors.loginEmail, { visible: true });
    await page.type(selectors.loginEmail, account.email, { dalay: 100 });
    await page.waitForTimeout(randomTimer());
    
    //Next
    await page.click(selectors.btnNext);
    await page.waitForTimeout(randomTimer());
    
    //Password
    await page.waitForSelector(selectors.loginPassword, { visible: true });
    await page.type(selectors.loginPassword, account.password, { dalay: 100 });
    await page.waitForTimeout(randomTimer());
  },
};
