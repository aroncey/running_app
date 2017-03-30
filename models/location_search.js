class LocationSearch {

  static getForecastByName(name){
    return this.findByName(name).
           then((key) => {
             return this.getForecastByKey(key)
           })
         }

  static findByName(name) {
    return Accuweather.getJSON(name).
    then(function(data){
      debugger
      searchAddress = data[0].LocalizedName + ", " + data[0].AdministrativeArea.EnglishName
      let locationKey = new Location(data[0])
      return locationKey.key
    })
  }

  static getForecastByKey(key){
    return Accuweather.getIndicies(key)
    .then((data) => {
      return data.map(Forecast.forecastBuilder)
      // return data.map(Forecast.newFromApi)
    })
  }
}
