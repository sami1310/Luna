if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config() //dotenv for loading the API key

}

const RAPID_API_KEY = process.env.RAPID_API_KEY  //for calling API key inside from the server rather then exposing it in the client side
const express = require('express')
const app = express()
const axios = require('axios')

app.use(express.json())
app.use(express.static('public'))

app.post('/Luna', (req, res) => {
       console.log(req.body)
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
