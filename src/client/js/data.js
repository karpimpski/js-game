import _areas from '../data/areas.json'
import _locations from '../data/locations.json'

export default class {
  constructor() {
    this.areas = null
    this.locations = _locations
    this.setAreas()
  }

  setAreas() {
    let result = []
    _areas.forEach(_area => {
      _area.locations = _area.locations.map(locationId => this.getLocation(locationId))
      result.push(_area)
    })
    this.areas = result
  }

  getArea(id) {
    return this.areas.find(a => {
      return a.id == id
    })
  }

  getLocation(id) {
    return this.locations.find(l => {
      return l.id == id
    })
  }
}