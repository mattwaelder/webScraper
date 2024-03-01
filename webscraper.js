import puppeteer from "puppeteer";
// const puppeteer = require("puppeteer");
// import puppeteer from "puppeteer-core";

const pageURL = "https://disneyland.disney.go.com/admission/tickets/dates/";
const selecteDate = "2024-02-28";
const xpath = '//*[@id="calendar0"]/com-calendar-date';

async function scrapeWeb(url, xpath) {
  console.log("scraping!");

  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const version = await page.browser().version();
  console.log(version);

  // Navigate the page to a URL
  await page.goto(url);

  const [el] = await page.$x(xpath);
  const date = await el.getProperty("date");
  const dateTxt = await date.jsonValue();

  console.log(dateTxt);

  browser.close();
}

scrapeWeb(pageURL, xpath);
