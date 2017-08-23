const yargs = require('yargs');

const geo = require('./geo/geo-location.js')
const weather = require('./geo/weather.js')
const argv = yargs
            .options({
              address : {
                demand : true,
                alias : "a",
                describe: "Address to fetch the weather info for"
              }
            })
            .help()
            .alias('help', 'h')
            .argv

geo.getGeoAddress(argv.address, (errorMessage, response) => {
    if(errorMessage){
      console.log(errorMessage);
    }
    else{
      console.log(`Address: ${response.formatted_address}`);
      console.log(`Latitude: ${response.latitude}`);
      console.log(`Longitude: ${response.longitude}`);
      weather.getWeather(response.latitude, response.longitude, (errorMessage, results) => {
        if(errorMessage){
          console.log(errorMessage);
        }
        else{
          console.log(JSON.stringify(results, undefined, 3));
      }
    });
  }
});
