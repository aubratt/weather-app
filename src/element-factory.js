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
