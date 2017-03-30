class Store {
  constructor () {
    this.state = {}
  }

   add(object) {
    this.state[object.index] = object
  }

   find(resource, object) {
    return this.state[object.index] = object
  }

}
