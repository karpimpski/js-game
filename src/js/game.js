import Data from './data.js'

const data = new Data()

export default class {
  constructor() {
    this.canvas = document.getElementById('canvas')
    this.areaId = 0
    this.area = null
    this.setArea(0)
    this.drawArea()
  }

  setArea(index) {
    this.area = data.getArea(index)
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