const { app, BrowserWindow } = require('electron')
require('./requests')

let win

function createWindow () {
  win = new BrowserWindow({ width: 800, height: 600, webSecurity: false})
  win.loadFile(__dirname + '/../../public/index.html')
  win.maximize()

  win.on('closed', () => win = null)
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => { 
  if (win === null) createWindow() 
})