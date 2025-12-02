import * as element from "./element-factory.js";
import { displayWeather } from "./page-builder.js";

const form = document.getElementById("search-form");
const city = document.getElementById("city");
const searchBarContainer = document.getElementById("search-bar-container");
const loading = document.getElementById("loading");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchValue = getCityInputValue();
  displayWeather(searchValue);
});

let debounceTimeout;
city.addEventListener("input", handleUserInteraction);
city.addEventListener("focus", handleUserInteraction);
city.addEventListener("click", handleUserInteraction);

window.addEventListener("click", (event) => {
  if (event.target !== searchBarContainer) {
    clearCurrentSuggestions();
    hideLoadingAnimation();
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
      hideLoadingAnimation();
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

  const weatherObj = {
    temp: Math.round(currentConditions.temp),
    conditions: currentConditions.conditions,
    dailyLow: Math.round(days[0].tempmin),
    dailyHigh: Math.round(days[0].tempmax),
    hours: hours,
    days: days,
  };

  console.log(weatherObj);
  return weatherObj;
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
      const city = citiesArray[i].city;
      const region = citiesArray[i].region;
      const country = citiesArray[i].country;
      const suggestionItemContainer = element.createSuggestionItemContainer();
      const suggestionItemCity = element.createSuggestionItemCity();
      const suggestionItemRegionAndCountry =
        element.createSuggestionItemRegionAndCountry();

      suggestionItemCity.textContent = city;
      suggestionItemRegionAndCountry.textContent = `${region}, ${country}`;

      suggestionsContainer.appendChild(suggestionItemContainer);

      suggestionItemContainer.appendChild(suggestionItemCity);
      suggestionItemContainer.appendChild(suggestionItemRegionAndCountry);

      attachSuggestionListener(suggestionItemContainer, city, region, country);
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

function attachSuggestionListener(
  suggestionItemContainer,
  city,
  region,
  country
) {
  const cityAndRegion = city + region;
  const searchValue = cityAndRegion.replace(/\s+/g, "");

  suggestionItemContainer.addEventListener("click", () => {
    displayWeather(searchValue, city, region, country);
  });
}

export function showLoadingAnimation() {
  loading.style.display = "block";
}

export function hideLoadingAnimation() {
  loading.style.display = "none";
}
