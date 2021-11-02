if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config() //dotenv for loading the API key

}

const RAPID_API_KEY = process.env.RAPID_API_KEY  //for calling API key inside from the server rather then exposing it in the client side
const express = require('express')
const app = express()
const axios = require('axios')

app.use(express.json())
app.use(express.static('public'))

app.post('/Luna',(req, res) => {
       //console.log(req.body)
       const lat = req.body.latitude
       const lng = req.body.longitude

       const latString = lat.toString()
       const lngString = lng.toString()
       const coma = ","
       const lanLng = latString.concat(coma,lngString)
         //const latlng = req.body
       ///console.log(typeof lanLng)
       //console.log(lanLng)

       var options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/astronomy.json',
        params: {q: lanLng},
        headers: {
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
          'x-rapidapi-key': RAPID_API_KEY
        }
      }

      axios.request(options).then(data => res.json(data.data.astronomy)).catch(function (error) {
        console.error(error);
      })

      
       /*axios({
        url: 'https://weatherapi-com.p.rapidapi.com/astronomy.json',
        //responseType: 'json',
        qs: {q: req.body},
        headers: {
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
          'x-rapidapi-key': 'd7f7fabb6emsh84c9c3b98b9306cp138529jsn8114d4952f5f',
          useQueryString: true
        }
       }).then(data => res.json(data.data.astronomy))*/

       
       //const latlng = req.body
    /*const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/ip.json',
        params: {q: 'searchBox'},
        headers: {
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
          'x-rapidapi-key': RAPID_API_KEY
        }
      }*/

      
})

app.listen(3000,() => {
    console.log('Server Started')
})
