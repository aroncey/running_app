class ForecastView {

  static renderWeek($target, data, index) {
    $target.find("#displayText").html(data.phrase)
    // $target.find("#nextDay").html(data.nextDay)
    $target.find("#displayAddress").html(searchAddress)
    $("#homeButton").show()
    $('#displayError').hide()
    $("#displayText").show()
    $("#displayAddress").show()
    $("#searchButton").hide()
    $('#searchTerms').hide()
    $('#nextButton').hide()
    $('#previousButton').hide()
    if (index !== 4) {
      $('#nextButton').show()
    }
    if (index !== 0) {
      $('#previousButton').show()
    }
    }

}
