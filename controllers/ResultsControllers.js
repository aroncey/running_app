class ResultsController {
  constructor($target){
    this.$target = $target
    this.currentIndex = 0
    this.data = []
    this.currentDay = {}
    this.attachListeners()
  }

  showForecast(data){
    this.data = data
    let displayData = data[this.currentIndex]
    ForecastView.renderWeek(this.$target, displayData, this.currentIndex)
  }

    attachListeners(){
      this.$target.find("#previousButton").on("click", (e) =>{
        e.preventDefault()
        if (this.currentIndex !== 0) {
          this.currentIndex --
          this.showForecast(this.data)
        }
      })
      this.$target.find("#nextButton").on("click", (e) =>{
        e.preventDefault()
        if (this.currentIndex !== 4) {
          this.currentIndex ++
          this.showForecast(this.data)
        }
      })

      this.$target.find("#homeButton").on("click", (e) =>{
        e.preventDefault()
        this.resetHome()
      })
    }


   resetHome() {
    this.resetState()
    $("#displayText").hide()
    $("#displayAddress").hide()
    $('#searchTerms').show()
    $('#searchButton').show()
    $('#homeButton').hide()
    $("#nextButton").hide()
    $("#previousButton").hide()
  }

   resetState() {
    this.clearStore()
    this.currentIndex = 0
  }

   clearStore(){
    for (let i = 0; i < 5; i++) {
      delete store.state[i]
    }
  }

}

// this.currentDay = this.data[this.currentIndex]
