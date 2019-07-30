import { OpenWeather } from "./interfaces/OpenWeather";
import { DarkSkiesWeather } from "./interfaces/DarkSkiesWeather";

/** 
 * @name getDarkSkiesApiResponse
 * @summary Makes a call to the Dark Skies API
 * @param city optional parameter, expecting a city name
 * if supplied will get weather for that city
 * @param forcastDate optional parameter, expecting UNIX timestamp
 * if supplied will get weather from given time to 24 hours after
 * @param coordinates optional parameter, expecting coordinates object
 * if supplied, overrides city and gets weather for that location
 * @returns DarkSkiesWeather object mapped to the API Response
 */
async function getDarkSkiesApiResponse(city: string = "Cleveland", forcastDate: number = Math.round(+new Date() / 1000), coordinates?: Coordinates): Promise<DarkSkiesWeather> {
  let longitude: number;
  let latitide: number;
  if (coordinates) {
    longitude = coordinates.longitude;
    latitide = coordinates.latitude;
  } else {
    let openWeatherResponse: OpenWeather = await getOpenWeatherApiResponse(city);
    longitude = openWeatherResponse.coord.lon;
    latitide = openWeatherResponse.coord.lat;
  }
  let apiKey: string = "5b1a0e3a0304d5a3058513c15c9bd987";
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  let apiUrl: string = `https://api.darksky.net/forecast/${apiKey}/${latitide},${longitude},${forcastDate}`;

  let darkSkiesApiResponse: DarkSkiesWeather;

  await fetch(proxyUrl + apiUrl)
    .then((response: Response) => response.json())
    .then(response => { darkSkiesApiResponse = response })
  return darkSkiesApiResponse;
}

/**
 * @name getOpenWeatherApiResponse
 * @summary gets api response from open weather API
 * @param city ptional parameter, expecting a city name
 * if supplied will get weather for that city
 * @returns Promise of OpenWeather which is an object for mapping the response
 */
async function getOpenWeatherApiResponse(city: string = "Cleveland"): Promise<OpenWeather> {
  let apiKey: string = "0e6736aa176b5c618a775168e0af47d8";
  let apiUrl: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  let weatherApiResponse: OpenWeather;

  await fetch(apiUrl)
    .then((response: Response) => response.json())
    .then(response => { weatherApiResponse = response })
  return weatherApiResponse;
}

/**
 * @name parseForDangerousWeather
 * @summary Parses Dark skies weather object for dangerous weather (hail, wind, snow, thunderstorms)
 * @param apiResponse Expecting Dark Skies Weather Object
 * @returns type of dangerous weather found, as a string, returns "none" if nothing found
 */
function parseForDangerousWeather(apiResponse: DarkSkiesWeather): string {
  let dangerousWeatherArray = ["hail", "wind", "snow", "thunderstorms", "rain"];
  let dangerousWeatherResponse: string;
  for (let i = 0; i < apiResponse.hourly.data.length; i++) {
    let apiElement = apiResponse.hourly.data[i].icon.toLowerCase();
    for (let j = 0; j < dangerousWeatherArray.length; j++) {
      let dangerousWeatherElement = dangerousWeatherArray[j];
      if (apiElement.search(dangerousWeatherElement) != -1) {
        dangerousWeatherResponse = dangerousWeatherElement;
        if (dangerousWeatherResponse == "rain") {
          dangerousWeatherResponse = "thunderstorms"
        }
        return dangerousWeatherResponse;
      }
    }
  }
  return "none"
}

/**
 * @name getThreeDaysOfDarkSkyData
 * @summary makes 3 apis calls to dark skies, for more info 
 * @returns a promise of a list of 3 Dark skies weather objects 
 */
async function getThreeDaysOfDarkSkyData(city: string = "Cleveland", coordinates?: Coordinates): Promise<DarkSkiesWeather[]> {

  var apiResponses: DarkSkiesWeather[] = [];
  let unixDay: number = 86400;
  let currentUnixDate: number = Math.round((+new Date() / 1000));
  let forcastDate = currentUnixDate - (unixDay * 3);
  for (let i = 0; i < 3; i++) {
    await getDarkSkiesApiResponse(city, forcastDate, coordinates).then(response => {
      apiResponses.push(response);
    })
    forcastDate += unixDay;
  }
  return apiResponses;

}
/**
 * @name checkForBadWeatherByCity
 * @summary for front end use, will check for bad weather in a given city
 * @param city expecting a string, 
 * @returns Promise<string> which will be a one of 5 options, hail, snow, thunderstorms, wind, none
 */
export async function checkForBadWeatherByCity(city: string): Promise<string> {

  let apiResponses: DarkSkiesWeather[] = await getThreeDaysOfDarkSkyData(city);
  let dangerousWeatherResponse: string;
  for (let i = 0; i < apiResponses.length; i++) {
    dangerousWeatherResponse = parseForDangerousWeather(apiResponses[i]);
    if (dangerousWeatherResponse != "none") {
      return dangerousWeatherResponse
    }
  }
  return dangerousWeatherResponse
}

/**
 * @name checkForBadWeatherByBrowser
 * @summary Uses browser to get location and checks for bad weather
 * @Returns Promise of type string and, one of 5 options, hail, snow, thunderstorms, wind, non
 */
export async function checkForBadWeatherByBrowser(): Promise<string> {
  let apiResponses: DarkSkiesWeather[];
  let dangerousWeatherResponse: string;
  let coordinates: Coordinates;

  await navigator.geolocation.getCurrentPosition(function (position) {
    coordinates = position.coords
  });

  await getThreeDaysOfDarkSkyData(undefined, coordinates).then(response => (apiResponses = response))

  for (let i = 0; i < apiResponses.length; i++) {
    dangerousWeatherResponse = parseForDangerousWeather(apiResponses[i]);
  }
  return dangerousWeatherResponse;
}

