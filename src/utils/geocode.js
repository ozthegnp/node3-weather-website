const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURI(address) + '.json?access_token=pk.eyJ1Ijoib3p0aGducCIsImEiOiJjazVxOTB5bTIyNGFuM2pwbG92NjFidnlyIn0.PiIW4WnxyZcC2X3aeWyItA&limit=1';

    request({url, json: true }, (err, {body}) => {
        if(err){
            callback("Unable to connect", undefined)
        } else if (body.features.length < 1) {
            callback("No results found, try another name.", undefined)
        } else {
             callback(undefined, {
                longitude: body.features[0].center[1],
                latitude: body.features[0].center[0],
                location: body.features[0].place_name
             })
        }
    })
}
module.exports = geocode