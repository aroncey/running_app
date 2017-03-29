class Accuweather {
  static getJSON(location) {
    let baseUrl = "http://dataservice.accuweather.com/locations/v1/search?apikey="
    let baseUrlWithApi = baseUrl + API_KEY + "&q="
    let searchUrl = baseUrlWithApi + location
    return $.get(searchUrl)
    }


  static getIndicies(key) {
    let url = "http://dataservice.accuweather.com/indices/v1/daily/5day/"
     let categoryId = "1"
     let baseUrlWithKey = url + key + "/"
     let searchUrl = baseUrlWithKey + categoryId + "?apikey=" + API_KEY
     return $.get(searchUrl)
  }


}
