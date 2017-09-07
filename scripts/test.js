
var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();



function saveScreenshot(fileName){
  browser.takeScreenshot().then(
      function(image, err) {
          require('fs').writeFile(fileName, image, 'base64', function(err) {
              console.log(err);
          });
      }
  );
}


browser.get('https://www.viator.com');

saveScreenshot('1.png');
var freeTextKeywordSearch = browser.findElement({id:'freeTextKeyword'});
freeTextKeywordSearch.sendKeys("text was");
saveScreenshot('2.png');

browser.quit();
