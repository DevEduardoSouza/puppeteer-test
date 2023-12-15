import * as puppeteer from "puppeteer";

const resetColor = "\x1b[0m";
const greenColor = "\x1b[32m";
const redColor = "\x1b[31m";

const configs = {
  maxWaitForTimeout: 10,
  minWaitForTimeout: 5,
  timeBetweenAccounts: 60000,
};

const selectors = {};

const urls = {
  loginAccountGoogle:
    "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&ifkv=ASKXGp0cQjoFZf7oG8zLmN2WkRag9GVulWxBbRpvN3KsJH6QATAKb2YQL9dcJqk7aU6LqbwdhN-AoA&service=accountsettings&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1711474959%3A1702677161781326&theme=glif",
};

const puppeteerConfigs = {
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: false,
  timeout: 60000,
  defaultViewport: {
    width: 800,
    height: 600,
  },
};

let browser;

const initBrowser = async () => {
  try {
    browser = await puppeteer.launch(puppeteerConfigs);
    console.log(`${greenColor}✅ Browser aberto com sucesso${resetColor}`);
    return browser;
  } catch (error) {
    console.error(
      `${redColor}❌ Erro ao abrir o navegador: ${error}${resetColor}`
    );
  }
};

export { configs, selectors, initBrowser, urls };
