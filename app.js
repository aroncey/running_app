const API_KEY = "Y6VozHmxn5OcKm1lkM47LtueW16Uw5GS"
const FLICKR_API = "ea01f140f196b83ec68734970e235e36"
const FLICKR_SECRET = "40e4e1d0614430fb"
const API_KEY2 = "6PeGFNKh7rV0HYYgZLg11SJidiuPfLz5"
var searchAddress
var store = new Store

$( () => {
  let $target = $('.search')
  let $where = $('#results')
  let rController = new ResultsController($where)
  let sController = new SearchController($target, rController)
})
