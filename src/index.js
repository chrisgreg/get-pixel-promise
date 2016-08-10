var getPixels = require("get-pixels")

function getPixelPromise(path, type) {
  type = type || null;

  return new Promise(function(resolve, reject) {
    getPixels(path, type, function(error, data){
      if (!error) {
        resolve(data);
      } else {
        reject(error);
      }
    })
  });
}

module.exports = getPixelPromise;
