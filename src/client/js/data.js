import { ipcRenderer } from 'electron'

export default class {
  constructor() {
    this.areas = null
    this.locations = ipcRenderer.sendSync('request', 'locations')
    this.setAreas()
  }

  setAreas() {
    this.areas = ipcRenderer.sendSync('request', 'areas').map(_area => {
      _area.locations = _area.locations.map(locationId => this.getLocation(locationId))
      return _area
    })
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