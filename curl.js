const request = require('request');

module.exports = function(webAddress) {
  request(webAddress, function(error, response, body) {
    if (error) throw error;
    process.stdout.write(body);
    process.stdout.write('\nprompt > ')
  })
}
