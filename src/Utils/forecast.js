const request = require ('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=bfe1f95b67addff4e09e008b8da9d8f1&query='+latitude+','+longitude
   
    request({ url, json:true }, (error, {body}) => {
        if (error){
            callback('Enable to connect to weather service!', undefined)
        }else if (body.error) {
            callback('Unable to find location', undefined)
        }else {
            callback(undefined , 
            body.current.weather_descriptions[0]+ '. It is currently '+body.current.temperature + ' degrees out. It feels like '+ body.current.feelslike+' degrees out.'
            )
        }
    })
}

module.exports = forecast
