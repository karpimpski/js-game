require('../scss/main.scss')
import { ipcRenderer } from 'electron'
import Game from './game.js'

ipcRenderer.send('test', 'message')
ipcRenderer.on('test', function(event, val) {
  console.log(val)
})

// listener to position tooltips on mouse
document.addEventListener('mousemove', function(e) {
  const tooltips = document.getElementsByClassName('tooltip')
  Object.keys(tooltips).forEach(key => {
    const tooltip = tooltips[key]
    let offsetX = 20
    let offsetY = 20
    if (window.innerWidth - e.pageX < 90) offsetX = -90
    if (window.innerHeight - e.pageY < 90) offsetY = -50
    tooltip.style.left = (e.pageX + offsetX) + 'px'
    tooltip.style.top = (e.pageY + offsetY) + 'px'
  })
})

new Game()