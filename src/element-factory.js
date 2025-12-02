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

export function createCurrentConditionsContainer() {
  const currentConditionsContainer = document.createElement("div");
  currentConditionsContainer.id = "current-conditions-container";
  return currentConditionsContainer;
}

export function createCurrentLocationContainer() {
  const currentLocationContainer = document.createElement("div");
  currentLocationContainer.id = "current-location-container";
  return currentLocationContainer;
}

export function createCurrentCity() {
  const currentCity = document.createElement("p");
  currentCity.id = "current-city";
  return currentCity;
}

export function createCurrentRegionAndCountry() {
  const currentRegionAndCountry = document.createElement("p");
  currentRegionAndCountry.id = "current-region-and-country";
  return currentRegionAndCountry;
}

export function createCurrentTemp() {
  const currentTemp = document.createElement("p");
  currentTemp.id = "current-temp";
  return currentTemp;
}

export function createCurrentConditions() {
  const currentConditions = document.createElement("p");
  currentConditions.id = "current-conditions";
  return currentConditions;
}

export function createDailyLowHighContainer() {
  const dailyLowHighContainer = document.createElement("div");
  dailyLowHighContainer.id = "daily-low-high-container";
  return dailyLowHighContainer;
}

export function createDailyLow() {
  const dailyLow = document.createElement("p");
  dailyLow.id = "daily-low";
  return dailyLow;
}

export function createDailyHigh() {
  const dailyHigh = document.createElement("p");
  dailyHigh.id = "daily-high";
  return dailyHigh;
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