class ForecastView {

  function showDays(){
    dataItem = store.state[counter]
    $("#displayText").html(dataItem.phrase)
    // $("#displayAddress").html(dataItem.searchAddress)
    $("homeButton").show()
    if (counter != 4) {
    $('#nextButton').show()
    }
    if (counter != 0) {
      $('#previousButton').show()
    }
  }

  function resetHome() {
    clearAllArrays()
    $("#displayText").hide()
    $("#displayAddress").hide()
    $("#results").hide()
    $('#searchTerms').show()
    $('#searchButton').show()
    $('#homeButton').hide()
    $("#nextButton").hide()
    $("#previousButton").hide()
  }

  function clearAllArrays() {
    clearStore()
    counter = 0
  }

  function incrementCounter() {
    counter++
    showDays()
  }

  function decrementCounter() {
    counter--
    showDays()
  }

  function clearStore(){
    for (let i = 0; i < 5; i++) {
      delete store.state.i
    }
  }

}
