import * as puppeteer from "puppeteer";

const resetColor = "\x1b[0m";
const greenColor = "\x1b[32m";
const redColor = "\x1b[31m";

const configs = {
  maxWaitForTimeout: 10,
  minWaitForTimeout: 5,
  timeBetweenAccounts: 60000,
};

const selectors = {
  loginEmail: "#email",
  loginPassword: "#password",
  btnNext: "#send",
};

const urls = {
  login: "https://www.epicgames.com/id/login",
};

const puppeteerConfigs = {
  executablePath:
    "C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe",
  headless: false,
  timeout: 60000,
  defaultViewport: {
    width: 800,
    height: 600,
  },
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
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

const randomTimer = () => {
  let maxTimer = 12;
  let minTimer = 6;
  let min = Math.ceil(maxTimer);
  let max = Math.floor(minTimer);
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
};

export { configs, selectors, initBrowser, urls, randomTimer };
