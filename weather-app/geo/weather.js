const request = require('request');

var apiKey = "0c90386fb0c165b10b8ca14a57884e8f"
var apiBaseURL = "https://api.darksky.net/forecast"

var getWeather = (latitude, longitude, callback) => {
  request({
    url : `${apiBaseURL}/${apiKey}/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
      if(error){
        callback("Could not contact forecast server");
      }else if (response.statusCode === 400){
        callback("Unable to fetch weather");
      }
      else if (response.statusCode === 200){
        callback(undefined, {
          temperature : body.currently.temperature,
          apparentTemperature : body.currently.apparentTemperature,
          humidity : body.currently.humidity
        });
      }
  });
}

module.exports.getWeather = getWeather
