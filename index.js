
// var longitude
// var latitude
// var searchAddress

//Fetches the Location Key for Entered Location
//
// // function getLocationKey() {
// //   $('#searchButton').hide()
// //   $('#searchTerms').hide()
// //   $('#homeButton').show()
//   // let baseUrl = "http://dataservice.accuweather.com/locations/v1/search?apikey="
//   // let baseUrlWithApi = baseUrl + API_KEY + "&q="
//   // let searchUrl = baseUrlWithApi + $('#searchTerms').val()
//   // $.get(searchUrl, function(data) {
//   //   return data
// //   }).then(function(data){
// //     key = data[0].Key
// //     searchAddress = data[0].LocalizedName + ", " + data[0].Country.LocalizedName
// //     longitude = data[0].GeoPosition.Longitude
// //     latitude = data[0].GeoPosition.Latitude
// //     return key
// //   }).then(function(key){
// //     getIndices(key)
// //   }).catch((error) => {
// //     console.log("There was an error with this request.")
// //   })
// // }
//
// //Fetching forcast search term on AccuWeather Forecast API
// function getForecastSearchTerm(key) {
//   let url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=`
//   let forecastSearch = url + API_KEY2
//   $.get(forecastSearch, function(data) {
//     return data
//   }).then(function(data){
//    data.DailyForecasts.forEach(function(object){
//     forecastsArray.push(object.Day.IconPhrase)
//   })
//   }).catch((error) => {
//     console.log("There was an error with this request.")
//   })
// }
//
//
// //From Location Key, Grab the Index Values -- Call Instantiation
// //
// // function getIndices(key) {
// //   let url = "http://dataservice.accuweather.com/indices/v1/daily/5day/"
// //   let categoryId = "1"
// //   let baseUrlWithKey = url + key + "/"
// //   let searchUrl = baseUrlWithKey + categoryId + "?apikey=" + API_KEY
//   // $.get(searchUrl).then(createForecast).catch((error) => {
//   //     console.log("There was an error with second call")
//   //   })
// //   }
// //Create objects from the promise-data
//
// // function createForecast(data){
// //   data.map(forecastBuilder)
// //   sortStore(store)
// // }
//
// //Forceast constructor
//
// function forecastBuilder(obj){
//     let rawDate = obj.EpochDateTime
//     let date = new Date(0)
//     date.setUTCSeconds(rawDate)
//     new Forecast(obj.ID, obj.CategoryValue, obj.Value, date, longitude, latitude, searchAddress)
// }
//
// //Sort list of objects based on value property
//
// function sortStore(store) {
//   store.sort(function(a, b) {
//     return parseFloat(b.value) - parseFloat(a.value);
//   });
//   getDatesFromIndices(store)
// }
//
// //Map over Store add the property which holds day
//
// function getDatesFromIndices(store) {
//   store.map(numberToDay)
//   describeDays(store)
// }
//
// //Convert the index value to a day
//
// function numberToDay(object) {
//   myDate = new Date ()
//   object.date = (new Date(myDate.setDate(myDate.getDate() + store.indexOf(object))))
//   formattedDate(object)
// }
//
// //Format the date into string of day of week
//
// function formattedDate(object){
// if (object.date.getUTCDay() === (new Date ()).getUTCDay()) {
//   object.dayName = "today"
// } else {
//   var weekday = new Array();
//     weekday[0] = "Sunday";
//     weekday[1] = "Monday";
//     weekday[2] = "Tuesday";
//     weekday[3] = "Wednesday";
//     weekday[4] = "Thursday";
//     weekday[5] = "Friday";
//     weekday[6] = "Saturday";
//     weekday[7] = "Today"
//     object.dayName = weekday[object.date.getUTCDay()]
//     }
// }
//
// //Map over object list to generateDescription
//
// function describeDays(store) {
//   store.forEach(generateDescription)
//   showDays(store)
// }
//
// //From day of week, generate a phrase for display
//
// function generateDescription(object){
// switch (true) {
//     case (object.value <= 1):
//           object.phrase = `Please do not run ${object.dayName}`
//           break;
//     case (object.value > 1 && object.value < 2):
//           object.phrase = `You would be crazy to run ${object.dayName}`
//           break;
//     case (object.value >= 2 && object.value < 3):
//           object.phrase = `Really? It's not worth the effort to go out ${object.dayName}`
//           break;
//     case (object.value >= 3 && object.value < 4):
//           object.phrase = `Eh, don't plan on it ${object.dayName}`
//           break;
//     case (object.value >= 4 && object.value < 5):
//           object.phrase = `We wouldn't think you're crazy to run ${object.dayName}, but we don't know how much fun you'll have`
//           break;
//     case (object.value >= 5 && object.value < 6):
//           object.phrase = `You may regret running ${object.dayName}`
//           break;
//     case (object.value >= 6 && object.value < 7):
//           object.phrase = `It will be a mediocre day to run ${object.dayName}!`
//           break;
//     case (object.value >= 7 && object.value < 8):
//           object.phrase = `It will be a nice day to run ${object.dayName}!`
//           break;
//     case (object.value >= 8 && object.value < 9):
//           object.phrase = `It will be a lovely day to run ${object.dayName}!`
//           break;
//     case (object.value >= 9 && object.value < 10):
//           object.phrase = `It will be a delightful day to run ${object.dayName}`
//           break;
//     case (object.value == 10):
//           object.phrase = `The weather will be out of this world ${object.dayName}!!!!`
//           break;
//     default:
//         alert("meeeeeh");
//         break;
//       }
// }

//Display on page

function showDays(store){
  dataItem = store[counter]
  $("#displayText").html(dataItem.phrase)
  $("#displayAddress").html(dataItem.searchAddress)
  $("homeButton").show()
  if (counter != 4) {
  $('#nextButton').show()
  }
  if (counter != 0) {
    $('#previousButton').show()
  }
}

function resetHome() {
  clearAllArrays()
  $("#displayText").hide()
  $("#displayAddress").hide()
  $("#results").hide()
  $('#searchTerms').show()
  $('#searchButton').show()
  $('#homeButton').hide()
  $("#nextButton").hide()
  $("#previousButton").hide()
}

function clearAllArrays() {
  store.length = 0
  counter = 0
}

function incrementCounter() {
  counter++
  showDays(store)
}

function decrementCounter() {
  counter--
  showDays(store)
}

//
// class Forecast {
//   constructor(activityId, categoryId, value, date, longitude, latitude, searchAddress){
//     this.activityId = activityId
//     this.categoryId = categoryId
//     this.value = value
//     this.date = date
//     this.longitude = longitude
//     this.latitude = latitude
//     this.searchAddress = searchAddress
//     store.push(this)
//   }
// }
