const request = require('request')

const forecast = (latitude ,longitude,callback) => {

const url =  'http://api.weatherstack.com/current?access_key=c01299afeed3bfe6f48cdd6de1a59e8f&query=37.8267,-122.4233&units=f'

request({url, json: true}, (error, {body})=> {
    if(error){
        callback('Unable to connect to weather service!!', undefined) 
    }
    else if(body.error){
        callback('Unable to find location', undefined)
    }else {
        callback(undefined, body.current.weather_descriptions[0] + '. It is currently: ' + body.current.temperature + ' Degrees Out. There is a ' + body.current.feelslike + '% chance of rain.')
    }
})
}
 
module.exports = forecast
