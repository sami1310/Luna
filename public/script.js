
//let map;

//const { response } = require("express");

function initMap() {

    const searchElement = document.querySelector('[data-city-search]')
    const searchBox = new google.maps.places.SearchBox(searchElement)
    
    const geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow();
    
    
    //searchBox.addEventListener("click", () => {
    searchBox.addListener('places_changed', () => {   //listens for the searchBox
      const place = searchBox.getPlaces()[0]
      if (place == null) return
      const latLong = new google.maps.LatLng(place)
      //console.log(latLong)
      fetch('/Luna',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            },
            body : JSON.stringify({
                latitude: place.geometry.location.lat(),//latLong.lat(),
                longitude: place.geometry.location.lng()//latLong.lng()
            })
    
          }).then(res => res.json()).then(data => {
              setMoonCastData(data, place.formatted_address)
              console.log(data)
          })

        })}


        const locationElement = document.querySelector('[data-location]')
        const statusElement = document.querySelector('[data-status]')
        const moonriseElement = document.querySelector('[data-moonrise]')
        const moonsetElement = document.querySelector('[data-moonset]')
        const illuminationElement = document.querySelector('[data-illumination]')

        function setMoonCastData(data, place) {
            locationElement.textContent = place
            statusElement.textContent = data.astro.moon_phase
            moonriseElement.textContent = data.astro.moonrise
            moonsetElement.textContent = data.astro.moonset
            illuminationElement.textContent = data.astro.moon_illumination

        }
    

  /*fetch('/mooncast',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
    },
    body: JSON.stringify({
        latitude: latitude,
        longitude: longitude
    })
}).then(res => res.json()).then(data => {
    setMoonCastData(data, place.formatted_address)
  })
 })*/


//google.maps.event.addDomListener(window, 'load', initMap);

//const searchElement = document.querySelector('[data-city-search]')
//const searchBox = new google.maps.places.SearchBox(searchElement)

//searchBox.addListener('places_changed', () => {   //listens for the searchBox
  //const place = searchBox.getPlaces()[0]

  //if (place == null) return
  //const latitude = place.geomatry.location.lat()
  //const longitude = place.geomatry.location.lng()

  /* fetch(
       '/mooncast',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json'
      },
      body: JSON.stringify({
          latitude: latitude,
          longitude: longitude
      })
  }).then(res => res.json()).then(data => {
      setMoonCastData(data, place.formatted_address)
  })*/
