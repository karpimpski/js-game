require('../scss/main.scss')

import Chat from './chat.js'
import _areas from '../data/areas.json'

const canvas = document.getElementById('canvas')
let areaId = 0

function drawArea() {
  const _area = _areas.find(l => {
    return l.id == areaId
  })
  _area.locations.forEach(_location => {
    let div = document.createElement('div')
    div.classList.add('location')
    Object.entries(_location.css).forEach(rule => {
      div.style[rule[0]] = rule[1]
    })
    canvas.appendChild(div)
  })
}

drawArea()