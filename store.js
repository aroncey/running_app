class Store {
  constructor () {
    this.state = {}
  }

  add(resource, object) {
    this.state[resource] ||= {}
    this.state[resource][object.position] = object
  }

  find(resource, position) {
    return this.state[resource][position]
  }

}
