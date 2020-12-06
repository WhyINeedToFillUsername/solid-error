const fs = require('fs');
const originalFile = 'node_modules/inherits/inherits_browser.js';
const replacementFile = 'hacks/patch/inherits_browser.js';

const filesToReadAndReplace = ['node_modules/cipher-base/index.js', 'node_modules/jwa/index.js']

function replaceContents(file, replacement, cb) {
  fs.readFile(replacement, (err, contents) => {
    if (err) return cb(err);
    fs.writeFile(file, contents, cb);
  });
}

// replace contents of file 'b' with contents of 'a'
// print 'done' when done
replaceContents(originalFile, replacementFile, err => {
  if (err) {
    // handle errors here
    throw err;
  }
  console.log('files replaced');
});

for (const file of filesToReadAndReplace) {
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace("require('stream')", 'require(\'readable-stream\')');
    result = result.replace("require('crypto')", 'require(\'crypto-browserify\')');

    fs.writeFile(file, result, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  });
}
