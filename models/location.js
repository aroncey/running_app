class Location {

  constructor(data) {
    this.localizedName = data.LocalizedName
    this.country = data.Country.LocalizedName
    this.latitude = data.GeoPosition.Latitude
    this.longitude = data.GeoPosition.Longitude
    this.key = data.Key
}
}
