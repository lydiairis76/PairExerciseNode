const { doesNotMatch } = require('assert');
const fs = require('fs');

module.exports = function ls(done) {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
     throw err
    } else {
      done(files.join('\n'))
      // process.stdout.write(files.join('\n'))
      // process.stdout.write('\nprompt > ');
    }
  })
}


