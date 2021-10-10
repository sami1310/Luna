const searchElement = document.querySelector('[data-city-search]')
const searchBox = new google.maps.places.SearchBox(searchElement)

searchBox.addListener('places_changed', () => {   //listener for the searchBox

  const place = searchBox.getPlaces()[0]
  if (place == null) return

  const latutude = place.geomatry.location.lat()
  const longtitude = place.geomatry.location.lng()
  
})