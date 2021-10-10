if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config() //dotenv for loading the API key

}

const RAPID_API_KEY = process.env.RAPID_API_KEY  //for calling API key inside from the server rather then exposing it in the client side
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req, res) => {

})

app.listen(3000,() => {
    console.log('Server Started')
})
