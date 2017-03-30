class SearchController {
  constructor($target, resultsController) {
    this.$target = $target
    this.resultsController = resultsController
    this.attachListeners()
  }

   attachListeners() {
    this.$target.find("#searchForm").on("submit", e => {
      e.preventDefault()
      let locationSearch = $(e.target).find("#searchTerms").val()
      // Forecast.findByName(locationSearch)
      LocationSearch.getForecastByName(locationSearch)
      .then((data) => {
        this.resultsController.showForecast(data)
      })
      .catch((error) => {
          console.log("There was an error with second call")
        })
      })
  }
}
