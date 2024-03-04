import puppeteer from "puppeteer";
// const puppeteer = require("puppeteer");
// import puppeteer from "puppeteer-core";

const pageURL = "https://disneyland.disney.go.com/availability-calendar/";
const selecteDate = "2024-02-28";
// const xpath = '//*[@id="calendar0"]/com-calendar-date[23]';
// let xpathIcon = "//*[@id="calendar0"]/com-calendar-date[24]/div/div[1]/div/com-icon[2]"

async function scrapeWeb(url) {
  console.log("scraping!!!!", url);

  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const version = await page.browser().version();
  // console.log(version);

  // Navigate the page to a URL
  await page.goto(url);

  const el = await page.waitForSelector("h1 > .header-container");
  // const [el] = await page.$x(xpath);
  console.log(el);
  const date = await el.getProperty("date");
  console.log(date);
  const dateTxt = await date.jsonValue();

  console.log(dateTxt);

  browser.close();
}

scrapeWeb(pageURL);
