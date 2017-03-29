class LocationKeyApi {
  static getLocationKey() {
    $('#searchButton').hide()
    $('#searchTerms').hide()
    $('#homeButton').show()
    let baseUrl = "http://dataservice.accuweather.com/locations/v1/search?apikey="
    let baseUrlWithApi = baseUrl + API_KEY + "&q="
    let searchUrl = baseUrlWithApi + $('#searchTerms').val()
    $.get(searchUrl, function(data) {
      return data
    }).then(function(data){
      key = data[0].Key
      searchAddress = data[0].LocalizedName + " " + data[0].Country.LocalizedName
      longitude = data[0].GeoPosition.Longitude
      latitude = data[0].GeoPosition.Latitude
      return key
    }).then(function(key){
      getIndices(key)
    }).catch((error) => {
      console.log("There was an error with this request.")
    })
  }
}
