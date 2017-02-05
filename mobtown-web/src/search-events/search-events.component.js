const template = require('./search-events.tpl.html')

class SearchEventsController {
  $onInit () {
    this.events = this.events.map(e => ({
      permitID: e.permitID,
      name: e.name,
      start: e.start,
      duration: Math.ceil((e.end - e.start) / (1000 * 60 * 60 * 24)), // TODO employ moment.js durations
      arrestsCount: e.arrestsCount
    }))
    // start by displaying all the events sorted by name
    this.results = this.events
    this.sortBy = 'name'
    this.reverse = false
  }

  onKeywordChanged () {
    const re = new RegExp(this.keyword, 'i')
    this.results = this.events.filter(e => re.test(e.name))
  }

  onSelect (event) {
    if (this.map) {
      const id = event.permitID
      console.log('display event ID ', id)
    }
  }

  /**
   * sets a reference to a map directive
   */
  setMap (map) {
    this.map = map
  }

  sort (sortBy) {
    if (this.sortBy === sortBy) {
      // change direction
      this.reverse = !this.reverse
    } else {
      // sort by new column
      this.sortBy = sortBy
    }
  }
}

module.exports = {
  bindings: {
    events: '<'
  },
  controller: SearchEventsController,
  template
}
