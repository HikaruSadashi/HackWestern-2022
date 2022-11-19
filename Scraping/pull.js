const puppeteer = require('puppeteer')

//given parameters
//let barcodeNum = '0060410020630';

async function start() {
    const browser = await puppeteer.launch({headless:false , slowMo: 500})
    const page = await browser.newPage()
    await page.goto("https://www.upcdatabase.com/itemform.asp/")

    let selector = '#upc';
    //document.getElementsByName("upc")
    //filling form
    await page.type(selector, "HERE")

    /*
    Testing
    //screenshot result
    await page.screenshot({ path: 'example.png', fullPage: true });
    */

    //clicking form submit button
    //await page.click("#")
    //waiting for page navigation
    await page.waitForNavigation()

    

    /*
    //get the text we need
    const text = await page.evaluate(() => document.querySelector('tbody'));

    //traversing the element node tree returned
    const firstTr = text.firstElementChild;
    const secondTr = firstTr.nextElementSibling;
    const thirdTr = secondTr.nextElementSibling;

    const firstTd = thirdTr.firstElementChild;
    const secondTd = firstTd.nextElementSibling;
    const thirdTd = secondTd.nextElementSibling;

    //extracing text from element
    let productName = thirdTd.textContent;
    console.log(productName);

    */
    
    //END - closing browser object//
    await browser.close()
  }
  
  start()