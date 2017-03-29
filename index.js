const API_KEY = "Y6VozHmxn5OcKm1lkM47LtueW16Uw5GS"
var store = [] // contains original objects created from promise
var valueArray = [] // contains values from original objects
var counter = 0


//Fetches the Location Key for Entered Location

function getLocationKey() {
  $('#searchButton').hide()
  $('#searchTerms').hide()
  $('#homeButton').show()
  let baseUrl = "http://dataservice.accuweather.com/locations/v1/search?apikey="
  let baseUrlWithApi = baseUrl + API_KEY + "&q="
  let searchUrl = baseUrlWithApi + $('#searchTerms').val()
  $.get(searchUrl, function(data) {
    return data
  }).then(function(data){
    debugger;
    key = data[0].Key
    return key
  }).then(function(key){
    getIndices(key)
  }).fail((error) => {
    console.log("There was an error with this request.")
  })
}

//From Location Key, Grab the Index Values -- Call Instantiation

function getIndices(key) {
  let url = "http://dataservice.accuweather.com/indices/v1/daily/5day/"
  let categoryId = "1"
  let baseUrlWithKey = url + key + "/"
  let searchUrl = baseUrlWithKey + categoryId + "?apikey=" + API_KEY
  $.get(searchUrl).then(createForecast).fail((error) => {
      console.log("There was an error with second call")
    })
  }

//Create objects from the promise-data

function createForecast(data){
  data.map(forecastBuilder)
  getValues(store)
}

//Forceast constructor

function forecastBuilder(obj){
    new Forecast(obj.ID, obj.CategoryValue, obj.Value, obj.EpochDateTime)
}

//Push the values into valueArray

function getValues(data) {
  data.forEach(function(element){
    valueArray.push(element.value)
  })
  createObjectList(valueArray)
}

//Map value array calling createObjectsForList

function createObjectList(valueArray) {
 let objectList = valueArray.map(createObjectsForList)
 sortObjectList(objectList)
}

//Create objects containing value and index position of value

function createObjectsForList(element, index) {
  return {
    value: element,
    position: index
    }
}

//Sort list of objects based on value property

function sortObjectList(objectList) {
  objectList.sort(function(a, b) {
    return parseFloat(b.value) - parseFloat(a.value);
  });
  getDatesFromIndices(objectList)
}

//Map over objectList add the property which holds day

function getDatesFromIndices(objectList) {
  objectList.map(numberToDay)
  describeDays(objectList)
}

//Convert the index value to a day

function numberToDay(object) {
  myDate = new Date ()
  object.date = (new Date(myDate.setDate(myDate.getDate() + object.position)))
  formattedDate(object)
}

//Format the date into string of day of week

function formattedDate(object){
if (object.date.getUTCDay() === (new Date ()).getUTCDay()) {
  object.dayName = "Today"
} else {
  var weekday = new Array();
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    weekday[7] = "Today"
    object.dayName = weekday[object.date.getUTCDay()]
    }
}

//Map over object list to generateDescription

function describeDays(objectList) {
  objectList.forEach(generateDescription)
  showDays(objectList)
}

//From day of week, generate a phrase for display

function generateDescription(object){
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
          object.phrase = `Eh, ${object.dayName} will have sub par conditions`
          break;
    case (object.value >= 4 && object.value < 5):
          object.phrase = `We wouldn't think you're crazy to run ${object.dayName}, but we don't know how much fun you'll have!`
          break;
    case (object.value >= 5 && object.value < 6):
          object.phrase = `You won't regret running ${object.dayName}, we guarantee it`
          break;
    case (object.value >= 6 && object.value < 7):
          object.phrase = `${object.dayName} will be a lovely day!`
          break;
    case (object.value >= 7 && object.value < 8):
          object.phrase = `${object.dayName} will be an amazing day!`
          break;
    case (object.value >= 8 && object.value < 9):
          object.phrase = `${object.dayName} is going to be a delight !`
          break;
    case (object.value >= 9 && object.value < 10):
          object.phrase = `${object.dayName} will be one of the best days ever to run`
          break;
    case (object.value == 10):
          object.phrase = `${object.dayName} will be out of this world !!!!`
          break;
    default:
        alert("meeeeeh");
        break;
      }
}

//Display on page

function showDays(objectList){
  objectList.forEach(function(object){
    $("#results").append(`<li>${object.phrase}</li>`)
  })
  $("homeButton").show()
}

function resetHome() {
  clearAllArrays()
  $("#results").empty()
  $('#searchTerms').show()
  $('#searchButton').show()
  $('#homeButton').hide()
}

function clearAllArrays() {
  store.length = 0
  valueArray.length = 0
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
