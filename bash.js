const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ')[0];
  const argument = data.toString().trim().split(' ')[1];

  if (cmd === 'pwd') pwd(cmd);
  else if (cmd === 'ls') ls(cmd);
  else if (cmd === 'cat') {
    cat(argument);
  }
  else if (cmd === 'curl') {
    curl(argument);
  }
  else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write(' \nprompt >');
  }
});
