const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=8285ca3c8d0337befbdecbc1221484a6&query=' + encodeURIComponent(address) +  '&limit=1'

    request({ url, json: true}, (error, {body} )=> {
        if (error){
            callback('Unable to connect to location Services!', undefined)
        }else if (body.data === undefined){
            callback('Unable to find address, search another address', undefined)
        }else{
            callback(undefined, {

                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location:  body.data[0].name
                //const results = response.body.data[0]
                //console.log('City: ' + results.name + ' Latitude: ' + results.latitude + ' Longitude: ' + results.longitude)
            })
        }
    })
}
module.exports = geocode
