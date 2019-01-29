const { ipcMain } = require('electron')
const fs = require('fs')

ipcMain.on('request', function(event, query) {
  const val = JSON.parse(fs.readFileSync(__dirname + '/data/' + query + '.json', 'utf8'))
  event.returnValue = val
})