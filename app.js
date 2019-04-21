const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const getForecast = (city) => {
    if(!city) {
        return console.log('City Name is required!');
    }
    geocode(process.argv[2], (error, {lat, long, location}) => {
        if (error) {
            return console.log(error);
        }
        forecast(lat, long, (error, fdata) => {
            if (error) {
                return console.log(error);
            }
            console.log(location);
            console.log(fdata);
        });
    });
}

getForecast(process.argv[2]);