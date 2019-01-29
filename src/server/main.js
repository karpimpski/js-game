const { app, BrowserWindow, ipcMain } = require('electron')
const fs = require('fs')

let win

function createWindow () {
  win = new BrowserWindow({ width: 800, height: 600, webSecurity: false})
  win.loadFile(__dirname + '/../../public/index.html')
  win.maximize()

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

ipcMain.on('request', function(event, query) {
  const val = JSON.parse(fs.readFileSync(__dirname + '/data/' + query + '.json', 'utf8'))
  event.returnValue = val
})