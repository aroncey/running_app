var store = []
const API_KEY = "Y6VozHmxn5OcKm1lkM47LtueW16Uw5GS"
const FLICKR_API = "ea01f140f196b83ec68734970e235e36"
const FLICKR_SECRET = "40e4e1d0614430fb"
const API_KEY2 = "6PeGFNKh7rV0HYYgZLg11SJidiuPfLz5"
var counter = 0

var forecastsArray = []

$( () => {
  //on page load -- this should not be running
  let $formTargeted = $("#searchButton")
  let sController = new SearchController($formTargeted)
})
