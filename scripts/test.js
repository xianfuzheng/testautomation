
var webdriver = require('selenium-webdriver');
var utils = require("./utils.js");
var browser = new webdriver.Builder()
              .usingServer()
              .withCapabilities({'browserName': 'chrome' })
              .build();
console.log(utils);

// navi to home page
browser.get('https://www.viator.com');

utils.saveScreenshot(browser, '1.png');

// input something
var freeTextKeywordSearch = browser.findElement({id:'freeTextKeyword'});
freeTextKeywordSearch.sendKeys("text was");

utils.saveScreenshot(browser, '2.png');

browser.quit();
