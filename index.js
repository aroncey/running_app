const API_KEY = "Y6VozHmxn5OcKm1lkM47LtueW16Uw5GS"
const store = []
const valueArray = []
const indexPositions = []
const bestDays = []
const sortedValueArray = []
const bestDaysDescriptions = []

function getLocationKey() {
  let baseUrl = "http://dataservice.accuweather.com/locations/v1/search?apikey="
  let baseUrlWithApi = baseUrl + API_KEY + "&q="
  let searchUrl = baseUrlWithApi + $('#searchTerms').val()
  $.get(searchUrl, function(data) {
    return data
  }).then(function(data){
    key = data[0].Key
    return key
  }).then(function(key){
    getIndices(key)
  }).fail((error) => {
    console.log("There was an error with this request.")
  })
}

function getIndices(key) {
  let url = "http://dataservice.accuweather.com/indices/v1/daily/5day/"
  let categoryId = "1"
  let baseUrlWithKey = url + key + "/"
  let searchUrl = baseUrlWithKey + categoryId + "?apikey=" + API_KEY
  $.get(searchUrl).then(createForecast).fail((error) => {
      console.log("There was an error with second call")
    })
  }

function createForecast(data){
  console.log("createForecast")
  data.map(forecastBuilder)
  getValues(store)
}

function forecastBuilder(obj){
    new Forecast(obj.ID, obj.CategoryValue, obj.Value, obj.EpochDateTime)
}

function getValues(data) {
  console.log("getValues")
  data.forEach(function(element){
    valueArray.push(element.value)
  })
  sortValueArray(valueArray)
}

function sortValueArray(valueArray){
  valueArray.forEach(function(element){
    sortedValueArray.push(element)
  })
  sortedValueArray.sort().reverse()
  getIndicesOfSortedArray(sortedValueArray)
}

function getIndicesOfSortedArray(sortedValueArray) {
  sortedValueArray.forEach(function(element) {
    indexPositions.push(valueArray.indexOf(element))
  })
  getDatesFromIndices(indexPositions)
}

function getDatesFromIndices(indexPositions) {
  indexPositions.map(numberToDay)
  describeDays(sortedValueArray)
}

function numberToDay(integer) {
  myDate = new Date ()
  formattedDate(new Date(myDate.setDate(myDate.getDate() + integer)))
}

function formattedDate(date){
var weekday = new Array();
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  bestDays.push(weekday[date.getUTCDay()])
}

function describeDays(sortedValueArray) {
  sortedValueArray.forEach(generateDescription)
  showDays(bestDaysDescriptions)
}

function generateDescription(element){
  let x = bestDays[sortedValueArray.indexOf(element)]
switch (true) {
    case (element <= 1):
          bestDaysDescriptions.push(`Please do not run on ${x}`)
          break;
    case (element > 1 && element < 2):
          bestDaysDescriptions.push(`You would be crazy to run on ${x}`)
          break;
    case (element >= 2 && element < 3):
          bestDaysDescriptions.push(`Really? It's not worth the effort to go out on ${x}`)
          break;
    case (element >= 3 && element < 4):
          bestDaysDescriptions.push(`Eh, ${x} will have sub par conditions`)
          break;
    case (element >= 4 && element < 5):
          bestDaysDescriptions.push(`We wouldn't think you're crazy to run on ${x}, but we don't know how much fun you'll have!`)
          break;
    case (element >= 5 && element < 6):
          bestDaysDescriptions.push(`You won't regret running on ${x}, we guarantee it`)
          break;
    case (element >= 6 && element < 7):
          bestDaysDescriptions.push(`${x} will be a lovely day!`)
          break;
    case (element >= 7 && element < 8):
          bestDaysDescriptions.push(`${x} will be an amazing day!`)
          break;
    case (element >= 8 && element < 9):
          bestDaysDescriptions.push(`${x} be a delight !`)
          break;
    case (element >= 9 && element < 10):
          bestDaysDescriptions.push(`${x} will be one fo the best days ever to run`)
          break;
    case (element == 10):
          bestDaysDescriptions.push(`${x} will be out of this world !!!!`)
          break;
    default:
        alert("meeeeeh");
        break;
      }
}

function showDays(bestDays){
  bestDays.forEach(function(value){
    $("#results").append(`<li>${value}</li>`)
  })
}

function getMaxValue(value){
  var maxValue = Math.max.apply(null, valueArray)
  getIndexOfMax(maxValue)
}
function getIndexOfMax(value){
  let indexOfMax = valueArray.indexOf(value)
  showIndexValue(indexOfMax)
}


class Forecast {
  constructor(activityId, categoryId, value, date){
    this.activityId = activityId
    this.categoryId = categoryId
    this.value = value
    this.date = date
    store.push(this)
  }
}
