const puppeteer = require("puppeteer");

(async () => {
  let websiteURL = "";

  let browser = await puppeteer.launch();
  let page = await browser.newPage();

  await page.goto(websiteURL, { waitUntil: "networkidle2" });

  let data = await page.evaluate(() => {
    let title = document.querySelector(".top-right").textContent;

    return title;
  });

  console.log(data);

  await browser.close();
})();
