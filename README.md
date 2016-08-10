get-pixel-promise
=========

A tiny library providing a wrapper around the popular get-pixel module

## Installation

  npm install get-pixel-promise --save

## Usage
  `
  var getPixelPromise = require('get-pixel-promise')
  var imageFile = "path/to/file.jpg|png|gif";

  var promise = getPixelPromise(/resources/fox.jpg");
  var imageShape = promise.then((image) => image.shape);
  `

## Tests

  npm test

## Release History

* 1.0.0 Initial release
