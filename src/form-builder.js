import * as element from "./element-factory.js";
import { displayWeather } from "./page-builder.js";

const form = document.getElementById("search-form");
const city = document.getElementById("city");
const searchBarContainer = document.getElementById("search-bar-container");
const loading = document.getElementById("loading");

let debounceTimeout;
city.addEventListener("input", handleUserInteraction);
city.addEventListener("focus", handleUserInteraction);
city.addEventListener("click", handleUserInteraction);

window.addEventListener("click", (event) => {
  if (event.target !== searchBarContainer) {
    clearCurrentSuggestions();
  }
});

function handleUserInteraction() {
  showLoadingAnimation();
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(async () => {
    const query = city.value.trim();
    if (query.length > 0) {
      displayCitiesSuggestions();
    } else {
      clearCurrentSuggestions();
    }
  }, 2000);
}

function getCityInputValue() {
  return city.value;
}

async function getWeatherData(searchValue) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchValue}?key=39E55ML7MSNJBDZ72DNEL3HKN`
    );
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    // TODO display error message on page
    console.error(error);
    return error;
  }
}

export async function processWeatherData(searchValue) {
  const weatherData = await getWeatherData(searchValue);
  const currentConditions = weatherData.currentConditions;
  const days = weatherData.days;
  const hours = days[0].hours.concat(days[1].hours);

  const currentWeather = {
    temp: Math.round(currentConditions.temp),
    feelsLike: Math.round(currentConditions.feelslike),
    conditionsIcon: currentConditions.icon,
    conditions: currentConditions.conditions,
    sunrise: currentConditions.sunrise,
    sunset: currentConditions.sunset,
    low: Math.round(days[0].tempmin),
    high: Math.round(days[0].tempmax),
    humidity: Math.round(currentConditions.humidity),
    windDirection: currentConditions.windDirection,
    windSpeed: currentConditions.windSpeed,
  };

  const hourlyWeather = [];

  const tenDayWeather = [];

  // Populate hourly weather array
  for (let i = 0; i < hours.length; i++) {
    const hour = {
      temp: hours[i].temp,
      conditionsIcon: hours[i].icon,
      precipType: hours[i].preciptype,
      precipProb: Math.round(hours[i].precipprob),
    };
    hourlyWeather.push(hour);
  }

  // Populate ten day weather array
  for (let i = 0; i < 10; i++) {
    const day = {
      conditionsIcon: days[i].icon,
      dailyLow: Math.round(days[i].tempmin),
      dailyHigh: Math.round(days[i].tempmax),
      description: days[i].description,
      precipType: days[i].preciptype,
      precipProb: days[i].precipprob,
    };
    tenDayWeather.push(day);
  }

  return { currentWeather, hourlyWeather, tenDayWeather };
}

async function getCitiesData() {
  const cityInputValue = getCityInputValue();
  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?types=CITY&namePrefix=${cityInputValue}&limit=5&sort=-population`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "7b24fddc77msh374531d9443e1e2p1a6578jsnbda260846e11",
      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const cityData = await response.json();
    console.log(cityData);
    return cityData;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function processCitiesData() {
  const citiesData = await getCitiesData();

  const citiesArray = citiesData.data;

  console.log(citiesArray);
  return citiesArray;
}

async function displayCitiesSuggestions() {
  clearCurrentSuggestions();

  const citiesArray = await processCitiesData();
  const suggestionsContainer = element.createSuggestionsContainer();

  if (citiesArray.length == 0) {
    const noCitiesFoundContainer = element.createNoCitiesFoundContainer();
    noCitiesFoundContainer.textContent = "No cities found.";

    suggestionsContainer.appendChild(noCitiesFoundContainer);
  } else {
    for (let i = 0; i < citiesArray.length; i++) {
      const cityData = {
        city: citiesArray[i].city,
        country: citiesArray[i].country,
        latitude: citiesArray[i].latitude,
        longitude: citiesArray[i].longitude,
        region: citiesArray[i].region,
        regionCode: citiesArray[i].regionCode,
      };

      const suggestionItemContainer = element.createSuggestionItemContainer();
      const suggestionItemCity = element.createSuggestionItemCity();
      const suggestionItemRegionAndCountry =
        element.createSuggestionItemRegionAndCountry();

      suggestionItemCity.textContent = cityData.city;
      suggestionItemRegionAndCountry.textContent = `${cityData.region}, ${cityData.country}`;

      suggestionsContainer.appendChild(suggestionItemContainer);

      suggestionItemContainer.appendChild(suggestionItemCity);
      suggestionItemContainer.appendChild(suggestionItemRegionAndCountry);

      attachSuggestionListener(suggestionItemContainer, cityData);
    }
  }

  searchBarContainer.appendChild(suggestionsContainer);

  hideLoadingAnimation();

  return;
}

function clearCurrentSuggestions() {
  const suggestionsContainer = document.getElementById("suggestions-container");
  if (suggestionsContainer) {
    searchBarContainer.removeChild(suggestionsContainer);
  }

  return;
}

function attachSuggestionListener(suggestionItemContainer, cityData) {
  const searchValue = `${cityData.latitude}, ${cityData.longitude}`;

  suggestionItemContainer.addEventListener("click", () => {
    displayWeather(searchValue, cityData);
  });
}

export function showLoadingAnimation() {
  loading.style.display = "block";
}

export function hideLoadingAnimation() {
  loading.style.display = "none";
}
