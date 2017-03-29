class Location {

  static getForecastByName(name){
    return this.findByName(name).
           then((key) => {
             this.getForecastByKey(this.key)
           })
         }

  static findByName(name) {
    return Accuweather.getJSON(name).
    then(function(data){
      return new Location(data[0])
    })
  }

  static getForecastByKey(key){
    return Accuweather.getIndicies(key).
    then(Forecast.createForecasts).
    catch((error) => {
        console.log("There was an error with second call")
      })
  }



  constructor(data) {
    debugger
    this.localizedName = data.LocalizedName
    this.country = data.Country.LocalizedName
    this.latitude = data.GeoPosition.Latitude
    this.longitude = data.GeoPosition.Longitude
    this.key = data.Key
  }
}
