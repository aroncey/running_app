class ForecastController {

  static createForecast(data){
    data.map(Forecast.forecastBuilder)
    debugger
    Store.state.forEach(Forecast.formattedDate)
    Store.state.forEach(Forecast.describeDays)
  }

}
