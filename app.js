const geocode = require("./utils/geocode");
const weather = require("./utils/weather");
const yargs = require("yargs").argv;

if(yargs._.length > 1){
  return console.log("Invalid input");
}

var input = yargs._[0];

geocode.location(encodeURIComponent(input), (error,geocodeData) => {
  if(error){
    return console.log(error);
  }
  weather.temperature(geocodeData.lat,geocodeData.lng, (error,weatherData) => {
    if(error){
      return console.log(error);
    }
    console.log("=======");
    console.log(`Location: ${geocodeData.address}`);
    console.log(`Timezone: ${weatherData.timezone}`);
    console.log(`Today it will be ${weatherData.summary}. Current temperature is ${weatherData.temperature}. Forecast says ${weatherData.forecast}`);
  });
});
