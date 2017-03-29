class SearchController {
  constructor($target) {
    this.$target = $target
    this.attachListeners()
  }

   attachListeners(target) {
    let $locationSearch = this.$target.val()
    Location.getForecastByName($locationSearch)
  }
}
