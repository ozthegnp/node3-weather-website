const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1f77816991469669f49c7c7e709745c6/' + longitude + ',' + latitude + '?units=si';
    request({ url, json: true }, (err, {body}) => {
        if (err) {
            callback("Low level error", undefined)
        } else if (body.error) {
            callback(body.error, undefined)
        } else {
            const temp = body.currently.temperature;
            const precipProb = body.currently.precipProbability
            const summary = body.daily.data[0].summary
            const pressure = body.daily.data[0].pressure

            callback(undefined,          
                summary + " It is currently " + temp + " degrees out. There is a " + precipProb + "% chance of rain and" + pressure + " pressure"
            )
        }
    })
}
module.exports = forecast;