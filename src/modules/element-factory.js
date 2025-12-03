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

export function createCurrentWeatherSunrise() {
  const currentWeatherSunrise = document.createElement("p");
  currentWeatherSunrise.id = "current-weather-sunrise";
  return currentWeatherSunrise;
}

export function createCurrentWeatherSunset() {
  const currentWeatherSunset = document.createElement("p");
  currentWeatherSunset.id = "current-weather-sunset";
  return currentWeatherSunset;
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

// Hourly Forecast
export function createHourlyForecastContainer() {
  const hourlyForecastContainer = document.createElement("div");
  hourlyForecastContainer.id = "hourly-forecast-container";
  return hourlyForecastContainer;
}

export function createHourlyForecastHeading() {
  const hourlyForecastHeading = document.createElement("h3");
  hourlyForecastHeading.classList.add("section-heading");
  return hourlyForecastHeading;
}

export function createHourRow() {
  const hourRow = document.createElement("div");
  hourRow.classList.add("hour-row");
  return hourRow;
}

export function createHourTime() {
  const hourTime = document.createElement("p");
  hourTime.classList.add("hour-time");
  return hourTime;
}

export function createHourTemp() {
  const hourTemp = document.createElement("p");
  hourTemp.classList.add("hour-temp");
  return hourTemp;
}

export function createHourConditionsContainer() {
  const hourConditionsContainer = document.createElement("div");
  hourConditionsContainer.classList.add("hour-conditions-container");
  return hourConditionsContainer;
}

export function createHourConditionsIcon() {
  const hourConditionsIcon = document.createElement("svg");
  hourConditionsIcon.classList.add("hour-conditions-icon");
  return hourConditionsIcon;
}

export function createHourConditionsText() {
  const hourConditionsText = document.createElement("p");
  hourConditionsText.classList.add("hour-conditions-text");
  return hourConditionsText;
}

export function createHourPrecipitationContainer() {
  const hourPrecipitationContainer = document.createElement("div");
  hourPrecipitationContainer.classList.add("hour-precipitation-container");
  return hourPrecipitationContainer;
}

export function createHourPrecipitationIcon() {
  const hourPrecipitationIcon = document.createElement("svg");
  hourPrecipitationIcon.classList.add("hour-precipitation-icon");
  return hourPrecipitationIcon;
}

export function createHourPrecipitationText() {
  const hourPrecipitationText = document.createElement("p");
  hourPrecipitationText.classList.add("hour-precipitation-text");
  return hourPrecipitationText;
}
