//From Location Key, Grab the Index Values -- Call Instantiation
class IndicesApi {
  static getIndices(key) {
    let url = "http://dataservice.accuweather.com/indices/v1/daily/5day/"
    let categoryId = "1"
    let baseUrlWithKey = url + key + "/"
    let searchUrl = baseUrlWithKey + categoryId + "?apikey=" + API_KEY
    $.get(searchUrl).then(createForecast).catch((error) => {
        console.log("There was an error with second call")
      })
    }
}
