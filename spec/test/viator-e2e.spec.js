var webdriver = require('selenium-webdriver');

var utils = require("../helpers/utils.js");


describe('Viator E2E', function() {

    // Open the TECH.insight website in the browser before each test is run
    beforeEach(function(done) {
        this.browser = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
        done();

    });

    // Close the website after each test is run (so that it is opened fresh each time)
    afterEach(function(done) {
        this.browser.quit().then(done);
    });


    // Test to ensure we are on the home page by checking the <body> tag id attribute
    it('Free Sales', function(done) {
      var browser = this.browser;
      var self = this;

      browser.get('https://www.viator.com');
      utils.saveScreenshot(browser);

      browser.findElements({css:'.close-circle'}).then(function(results){
        if (results && results.length > 0) {
          console.log('pop up window is presented');
          results[0].click();
          utils.saveScreenshot(browser);
        }
      });

      var freeTextKeywordSearch = browser.findElement({id:'freeTextKeyword'});
      freeTextKeywordSearch.sendKeys("Sydney").then(function(){

        console.log('get Sydney....');
          utils.saveScreenshot(browser);

          browser.findElement({css:'#searchGo'}).click().then(function(){
            utils.saveScreenshot(browser);
          });
      });



    });
});
