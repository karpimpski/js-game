export default class {
  constructor() {
    this.element = document.getElementById('canvas')
  }

  drawArea(area) {
    area.locations.forEach(location => this.drawLocation(location))
  }

  drawLocation(location) {
    let div = document.createElement('div')
    div.classList.add('location')
    Object.entries(location.css).forEach(rule => {
      div.style[rule[0]] = rule[1]
    })

    this.drawTooltip(div, location.title)
    this.element.appendChild(div)
  }

  drawTooltip(parent, text) {
    let tooltip = document.createElement('div')
    tooltip.classList.add('tooltip')
    tooltip.textContent = text
    parent.appendChild(tooltip)
  }
}