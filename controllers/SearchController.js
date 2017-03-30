class SearchController {
  constructor($target) {
    this.$target = $target
    this.attachListeners()
  }

   attachListeners() {
    this.$target.find("#searchButton").on("click", e => {
      let $locationSearch = this.$target.find("#searchTerms").val()
      let location = LocationSearch.getForecastByName($locationSearch)
  })
}
}
