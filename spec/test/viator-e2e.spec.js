var webdriver = require('selenium-webdriver');

var utils = require("../helpers/utils.js");


describe('Viator E2E', function() {

    // Open the TECH.insight website in the browser before each test is run
    beforeEach(function(done) {
        this.browser = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();



    });

    // Close the website after each test is run (so that it is opened fresh each time)
    afterEach(function(done) {
        this.browser.quit().then(done);
    });


    // Test to ensure we are on the home page by checking the <body> tag id attribute
    it('Free Sales', function(done) {
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
      var browser = this.browser;
      var self = this;
      browser.get('https://www.viator.com/');

      var searchBox = browser.wait(webdriver.until.elementLocated(webdriver.By.id('freeTextKeyword')), 1000000);

      searchBox.sendKeys('Sydney\n');

      utils.saveScreenshot(browser);

      done();

    });
});
