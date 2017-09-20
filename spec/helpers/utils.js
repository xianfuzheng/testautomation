
const fs = require('fs');


const folderRoot = "./images";
let imageNo = 0;

const Utils = {
  saveScreenshot: function (browser, fileName){
    if (!fileName) {
        fileName = imageNo+".png";
    }
    imageNo++;

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
