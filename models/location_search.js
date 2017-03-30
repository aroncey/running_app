class LocationSearch {

  static getForecastByName(name){
    return this.findByName(name).
           then((key) => {
             this.getForecastByKey(key)
           })
         }

  static findByName(name) {
    return Accuweather.getJSON(name).
    then(function(data){
      let locationKey = new Location(data[0])
      return locationKey.key
    })
  }

  static getForecastByKey(key){
    return Accuweather.getIndicies(key).
    then((data) => {
      ForecastController.createForecast(data)
    }).
    catch((error) => {
        console.log("There was an error with second call")
      })
    }
}
