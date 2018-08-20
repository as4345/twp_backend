const puppeteer = require('puppeteer');

module.exports = async (ctx, next) => {
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
    await page.screenshot({path: 'example.png'});

    await browser.close();

    console.log(1111)
    ctx.body = {a:1}
}