class SearchController {
  constructor($target) {
    this.$target = $target
    this.attachListeners(this.target)
  }

   attachListeners(target) {
    let $locationSearch = this.$target.val()
    $(target).on('click', Location.getForecastByName($locationSearch)
  )
  }
}
