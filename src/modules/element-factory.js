// Search Bar
export function createSuggestionsContainer() {
  const suggestionsContainer = document.createElement("div");
  suggestionsContainer.id = "suggestions-container";
  return suggestionsContainer;
}

export function createSuggestionItemContainer() {
  const suggestionItemContainer = document.createElement("div");
  suggestionItemContainer.classList.add("suggestion-item-container");
  return suggestionItemContainer;
}

export function createSuggestionItemCity() {
  const city = document.createElement("p");
  city.classList.add("city-name");
  return city;
}

export function createSuggestionItemRegionAndCountry() {
  const regionAndCountry = document.createElement("p");
  regionAndCountry.classList.add("region-and-country");
  return regionAndCountry;
}

export function createNoCitiesFoundContainer() {
  const noCitiesFoundContainer = document.createElement("div");
  noCitiesFoundContainer.classList.add("no-cities-found-container");
  return noCitiesFoundContainer;
}

// Current Weather
export function createCurrentWeatherContainer() {
  const currentWeatherContainer = document.createElement("div");
  currentWeatherContainer.id = "current-weather-container";
  return currentWeatherContainer;
}

export function createCurrentWeatherHeaderContainer() {
  const currentWeatherHeaderContainer = document.createElement("div");
  currentWeatherHeaderContainer.id = "current-weather-header-container";
  return currentWeatherHeaderContainer;
}

export function createCurrentWeatherHeading() {
  const currentWeatherHeading = document.createElement("h2");
  currentWeatherHeading.id = "current-weather-heading";
  return currentWeatherHeading;
}

export function createCurrentWeatherCity() {
  const currentWeatherCity = document.createElement("p");
  currentWeatherCity.id = "current-weather-city";
  return currentWeatherCity;
}

export function createCurrentWeatherTempContainer() {
  const currentWeatherTempContainer = document.createElement("div");
  currentWeatherTempContainer.id = "current-weather-temp-container";
  return currentWeatherTempContainer;
}

export function createCurrentWeatherTemp() {
  const currentWeatherTemp = document.createElement("p");
  currentWeatherTemp.id = "current-weather-temp";
  return currentWeatherTemp;
}

export function createCurrentWeatherFeelsLike() {
  const currentWeatherFeelsLike = document.createElement("p");
  currentWeatherFeelsLike.id = "current-weather-feels-like";
  return currentWeatherFeelsLike;
}

export function createCurrentWeatherConditionsContainer() {
  const currentWeatherConditionsContainer = document.createElement("div");
  currentWeatherConditionsContainer.id = "current-weather-conditions-container";
  return currentWeatherConditionsContainer;
}

export function createCurrentWeatherConditionsIcon() {
  const currentWeatherConditionsIcon = document.createElement("img");
  currentWeatherConditionsIcon.id = "current-weather-conditions-icon";
  return currentWeatherConditionsIcon;
}

export function createCurrentWeatherConditionsText() {
  const currentWeatherConditionsText = document.createElement("p");
  currentWeatherConditionsText.id = "current-weather-conditions-text";
  return currentWeatherConditionsText;
}

export function createCurrentWeatherSunContainer() {
  const currentWeatherSunContainer = document.createElement("div");
  currentWeatherSunContainer.id = "current-weather-sun-container";
  return currentWeatherSunContainer;
}

export function createCurrentWeatherSunriseIcon() {
  const currentWeatherSunriseIcon = document.createElement("img");
  currentWeatherSunriseIcon.id = "current-weather-sunrise-icon";
  return currentWeatherSunriseIcon;
}

export function createCurrentWeatherSunriseTime() {
  const currentWeatherSunriseTime = document.createElement("p");
  currentWeatherSunriseTime.id = "current-weather-sunrise-time";
  return currentWeatherSunriseTime;
}

export function createCurrentWeatherSunsetIcon() {
  const currentWeatherSunsetIcon = document.createElement("img");
  currentWeatherSunsetIcon.id = "current-weather-sunset-icon";
  return currentWeatherSunsetIcon;
}

export function createCurrentWeatherSunsetTime() {
  const currentWeatherSunsetTime = document.createElement("p");
  currentWeatherSunsetTime.id = "current-weather-sunset-time";
  return currentWeatherSunsetTime;
}

export function createCurrentWeatherLowHighContainer() {
  const currentWeatherLowHighContainer = document.createElement("div");
  currentWeatherLowHighContainer.id = "current-weather-low-high-container";
  return currentWeatherLowHighContainer;
}

export function createCurrentWeatherLow() {
  const currentWeatherLow = document.createElement("p");
  currentWeatherLow.id = "current-weather-low";
  return currentWeatherLow;
}

export function createCurrentWeatherHigh() {
  const currentWeatherHigh = document.createElement("p");
  currentWeatherHigh.id = "current-weather-high";
  return currentWeatherHigh;
}

export function createCurrentWeatherHumidityWindContainer() {
  const currentWeatherHumidityWindContainer = document.createElement("div");
  currentWeatherHumidityWindContainer.id =
    "current-weather-humidity-wind-container";
  return currentWeatherHumidityWindContainer;
}

export function createCurrentWeatherHumidity() {
  const currentWeatherHumidity = document.createElement("p");
  currentWeatherHumidity.id = "current-weather-humidity";
  return currentWeatherHumidity;
}

export function createCurrentWeatherWind() {
  const currentWeatherWind = document.createElement("p");
  currentWeatherWind.id = "current-weather-wind";
  return currentWeatherWind;
}

// Hourly Weather
export function createHourlyWeatherContainer() {
  const hourlyWeatherContainer = document.createElement("div");
  hourlyWeatherContainer.id = "hourly-weather-container";
  return hourlyWeatherContainer;
}

export function createHourlyWeatherHeader() {
  const hourlyWeatherHeader = document.createElement("div");
  hourlyWeatherHeader.id = "hourly-weather-header";
  return hourlyWeatherHeader;
}

export function createHourlyWeatherHeading() {
  const hourlyWeatherHeading = document.createElement("h2");
  hourlyWeatherHeading.id = "hourly-weather-heading";
  return hourlyWeatherHeading;
}

export function createHourlyWeatherCarousel() {
  const hourlyWeatherCarousel = document.createElement("div");
  hourlyWeatherCarousel.id = "hourly-weather-carousel";
  return hourlyWeatherCarousel;
}

export function createHourlyWeatherLeftArrowContainer() {
  const hourlyWeatherLeftArrowContainer = document.createElement("button");
  hourlyWeatherLeftArrowContainer.id = "hourly-weather-left-arrow-container";
  return hourlyWeatherLeftArrowContainer;
}

export function createHourlyWeatherLeftArrowIcon() {
  const hourlyWeatherLeftArrowIcon = document.createElement("img");
  hourlyWeatherLeftArrowIcon.id = "hourly-weather-left-arrow-icon";
  return hourlyWeatherLeftArrowIcon;
}

export function createHourlyWeatherHourContainer() {
  const hourlyWeatherHourContainer = document.createElement("div");
  hourlyWeatherHourContainer.classList.add("hourly-weather-hour-container");
  return hourlyWeatherHourContainer;
}

export function createHourlyWeatherTimeContainer() {
  const hourlyWeatherTimeContainer = document.createElement("div");
  hourlyWeatherTimeContainer.classList.add("hourly-weather-time-container");
  return hourlyWeatherTimeContainer;
}

export function createHourlyWeatherTime() {
  const hourlyWeatherTime = document.createElement("p");
  hourlyWeatherTime.classList.add("hourly-weather-time");
  return hourlyWeatherTime;
}

export function createHourlyWeatherConditionsIconContainer() {
  const hourlyWeatherConditionsIconContainer = document.createElement("div");
  hourlyWeatherConditionsIconContainer.classList.add("hourly-weather-conditions-icon-container");
  return hourlyWeatherConditionsIconContainer;
}

export function createHourlyWeatherConditionsIcon() {
  const hourlyWeatherConditionsIcon = document.createElement("img");
  hourlyWeatherConditionsIcon.classList.add("hourly-weather-conditions-icon");
  return hourlyWeatherConditionsIcon;
}

export function createHourlyWeatherTempContainer() {
  const hourlyWeatherTempContainer = document.createElement("div");
  hourlyWeatherTempContainer.classList.add("hourly-weather-temp-container");
  return hourlyWeatherTempContainer;
}

export function createHourlyWeatherTemp() {
  const hourlyWeatherTemp = document.createElement("p");
  hourlyWeatherTemp.classList.add("hourly-weather-temp");
  return hourlyWeatherTemp;
}

export function createHourlyWeatherPrecipProbContainer() {
  const hourlyWeatherPrecipProbContainer = document.createElement("div");
  hourlyWeatherPrecipProbContainer.classList.add("hourly-weather-precip-prob-container");
  return hourlyWeatherPrecipProbContainer;
}

export function createHourlyWeatherPrecipIcon() {
  const hourlyWeatherPrecipIcon = document.createElement("img");
  hourlyWeatherPrecipIcon.classList.add("hourly-weather-precip-icon");
  return hourlyWeatherPrecipIcon;
}

export function createHourlyWeatherPrecipProb() {
  const hourlyWeatherPrecipProb = document.createElement("p");
  hourlyWeatherPrecipProb.classList.add("hourly-weather-precip-prob");
  return hourlyWeatherPrecipProb;
}

export function createHourlyWeatherRightArrowContainer() {
  const hourlyWeatherRightArrowContainer = document.createElement("button");
  hourlyWeatherRightArrowContainer.id = "hourly-weather-right-arrow-container";
  return hourlyWeatherRightArrowContainer;
}

export function createHourlyWeatherRightArrowIcon() {
  const hourlyWeatherRightArrowIcon = document.createElement("img");
  hourlyWeatherRightArrowIcon.id = "hourly-weather-right-arrow-icon";
  return hourlyWeatherRightArrowIcon;
}