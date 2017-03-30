class ForecastView {

  static renderWeek($target, data, index) {
    $target.find("#displayText").html(data.phrase)
    // $("#displayAddress").html(dataItem.searchAddress)
    $("#homeButton").show()
    $("#displayText").show()
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
