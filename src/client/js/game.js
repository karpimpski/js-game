import Data from './data.js'
import Canvas from './canvas.js'

const data = new Data()

export default class {
  constructor() {
    this.canvas = new Canvas()
    this.areaId = 0
    this.area = data.getArea(0)
    this.canvas.drawArea(this.area)
  }
}