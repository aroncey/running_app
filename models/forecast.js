class Forecast {

    constructor(index, activityId, categoryId, value, date){
      this.index = index
      this.activityId = activityId
      this.categoryId = categoryId
      this.value = value
      this.date = date
      store.add(this)
    }


  static forecastBuilder(obj, index){
      let rawDate = obj.EpochDateTime
      let date = new Date(0)
      date.setUTCSeconds(rawDate)
      let forecast = new Forecast(index, obj.ID, obj.CategoryValue, obj.Value, date)
      Forecast.formattedDate(forecast)
      Forecast.generateDescription(forecast)
      return forecast
  }

  static formattedDate(object){
  var weekday = new Array();
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
      weekday[7] = "Today"
if (object.date.getUTCDay() === (new Date ()).getUTCDay()) {
  object.dayName = "today"
} else {
    object.dayName = weekday[object.date.getUTCDay()]
    }
    object.nextDay = weekday[object.date.getUTCDay() + 1]
}

  static generateDescription(object){
    switch (true) {
        case (object.value <= 1):
              object.phrase = `Please do not run ${object.dayName}`
              break;
        case (object.value > 1 && object.value < 2):
              object.phrase = `You would be crazy to run ${object.dayName}`
              break;
        case (object.value >= 2 && object.value < 3):
              object.phrase = `Really? It's not worth the effort to go out ${object.dayName}`
              break;
        case (object.value >= 3 && object.value < 4):
              object.phrase = `Eh, don't plan on it ${object.dayName}`
              break;
        case (object.value >= 4 && object.value < 5):
              object.phrase = `We wouldn't think you're crazy to run ${object.dayName}, but we don't know how much fun you'll have`
              break;
        case (object.value >= 5 && object.value < 6):
              object.phrase = `You may regret running ${object.dayName}`
              break;
        case (object.value >= 6 && object.value < 7):
              object.phrase = `It will be a mediocre day to run ${object.dayName}!`
              break;
        case (object.value >= 7 && object.value < 8):
              object.phrase = `It will be a nice day to run ${object.dayName}!`
              break;
        case (object.value >= 8 && object.value < 9):
              object.phrase = `It will be a lovely day to run ${object.dayName}!`
              break;
        case (object.value >= 9 && object.value < 10):
              object.phrase = `It will be a delightful day to run ${object.dayName}`
              break;
        case (object.value == 10):
              object.phrase = `The weather will be out of this world ${object.dayName}!!!!`
              break;
        default:
            alert("meeeeeh");
            break;
        }
  }


}

// // static sortStore(store) {
// //   store.sort(function(a, b) {
// //     return parseFloat(b.value) - parseFloat(a.value);
// //   });
// //   getDatesFromIndices(store)
// // }
//
// static getDatesFromIndices(store) {
//   store.map(numberToDay)
//   describeDays(store)
// // }
//
// static numberToDay(object) {
//   myDate = new Date ()
//   object.date = (new Date(myDate.setDate(myDate.getDate() + store.indexOf(object))))
//   formattedDate(object)
// }


  // static describeDays(object) {
  //   ForecastView.showDays(days)
  // }
