require('../scss/main.scss')

import _areas from '../data/areas.json'

class Game {
  constructor() {
    this.canvas = document.getElementById('canvas')
    this.areaId = 0
    this.area = null
    this.setArea(0)
    this.drawArea()
  }

  setArea(index) {
    this.area = _areas.find(l => {
      return l.id == index
    })
  }

  drawArea() {
    this.area.locations.forEach(location => {
      let div = document.createElement('div')
      div.classList.add('location')
      Object.entries(location.css).forEach(rule => {
        div.style[rule[0]] = rule[1]
      })

      let tooltip = document.createElement('div')
      tooltip.classList.add('tooltip')
      tooltip.textContent = location.title
      div.appendChild(tooltip)
      this.canvas.appendChild(div)
    })
  }
}

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