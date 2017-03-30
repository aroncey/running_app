class SearchController {
  constructor($target, $valueTarget) {
    this.$target = $target
    this.$valueTarget = $valueTarget
    this.attachListeners()
  }

   attachListeners() {
    let $locationSearch = this.$valueTarget.val()
    this.$target.on('click', Location.getForecastByName($locationSearch)
  )
  }
}
