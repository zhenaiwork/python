const { link } = require('fs');
const { title } = require('process');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.bilibili.com/v/popular/all?spm_id_from=333.5.b_7072696d61727950616765546162.3');
  let title=await page.$$eval('#app > div> div > ul > div > div > p',(links) = links.map((x) =>x.innerTexT)
  );
  console.log(title);
})();