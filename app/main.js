var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.

require('crash-reporter').start();

var shell = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  shell = new BrowserWindow({
    'width': 800,
    'height': 400,
    'center': true,
    'auto-hide-menu-bar': true
  });

  // shell.openDevTools();

  shell.loadUrl('file://' + __dirname + '/index.html');

  shell.on('closed', function() {
    shell = null;
  });
});
