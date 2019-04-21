const request = require('request');

const forecast = (lat, long, callback) => {

    const url = `https://api.darksky.net/forecast/84577bc86ae9c2be8ddffed04d5d7b21/${lat},${long}`;

    request({
        url: url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback('Unable to connect! Check internet connectivity', undefined);
        } else if (body.error) {
            callback(body.error,undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' +
            body.currently.temperature + ' degrees out. There is a ' +
            body.currently.precipProbability + '% chance of rain.');
        }
    });

}

module.exports = forecast;