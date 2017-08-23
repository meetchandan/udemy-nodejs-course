const request = require('request');

var getGeoAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);
  request({
    url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json : true
    }, (error, response, body) => {
      if(error){
        callback("Unable to connect to server", undefined);
      }
      else if(body.status === "ZERO_RESULTS"){
        callback("Address not found", undefined);
      }else if(body.status === "OK"){
        var result = {
          formatted_address : body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng,
        };
        callback(undefined, result);
      }
  });
};

module.exports.getGeoAddress = getGeoAddress 
