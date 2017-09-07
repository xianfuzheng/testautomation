
const fs = require('fs');


const folderRoot = "./images";

const Utils = {
  saveScreenshot: function (browser, fileName){
    browser.takeScreenshot().then(
        function(image, err) {
            fs.writeFile(folderRoot+ "/"+ fileName, image, 'base64', function(err) {
                console.log("File " + fileName + " saved");
            });
        }
    );
  },

  log: function(msg){
    console.log(message);
  }
}

module.exports = Utils;
