import * as element from "./element-factory.js";
import { processWeatherData } from "./form-builder";

const content = document.getElementById("content");

const degreeSymbol = "°";

export async function displayWeather(searchValue, city, region, country) {
  clearContent();

  const weatherObj = await processWeatherData(searchValue);
  displayCurrentConditions(
    weatherObj.temp,
    weatherObj.conditions,
    weatherObj.dailyLow,
    weatherObj.dailyHigh,
    city,
    region,
    country
  );
  displayHourlyForecast(weatherObj.hours);
  displayTenDayForecast(weatherObj.days);
}

function clearContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

// CURRENT CONDITIONS
// BACKGROUND: Conditions visual
// (i.e. Sunny gif, Rainy gif, etc.)
// Location
// Current temp
// Conditions
// Daily low
// Daily high

function displayCurrentConditions(
  temp,
  conditions,
  low,
  high,
  city,
  region,
  country
) {
  const currentConditionsContainer = createCurrentConditionsContainer();
  const currentLocationContainer = createCurrentLocationContainer();
  const currentCity = createCurrentCity();
  const currentRegionAndCountry = createCurrentRegionAndCountry();
  const currentTemp = createCurrentTemp();
  const currentConditions = createCurrentConditions();
  const dailyLowHighContainer = createDailyLowHighContainer();
  const dailyLow = createDailyLow();
  const dailyHigh = createDailyHigh();

  currentCity.textContent = city;
  currentRegionAndCountry.textContent = `${region}, ${country}`;
  currentTemp.textContent = temp + degreeSymbol;
  currentConditions.textContent = conditions;
  dailyLow.textContent = `L: ${low}${degreeSymbol}`;
  dailyHigh.textContent = `H: ${high}${degreeSymbol}`;

  content.appendChild(currentConditionsContainer);

  currentConditionsContainer.appendChild(currentLocationContainer);
  currentConditionsContainer.appendChild(currentTemp);
  currentConditionsContainer.appendChild(currentConditions);
  currentConditionsContainer.appendChild(dailyLowHighContainer);

  currentLocationContainer.appendChild(currentCity);
  currentLocationContainer.appendChild(currentRegionAndCountry);

  dailyLowHighContainer.appendChild(dailyLow);
  dailyLowHighContainer.appendChild(dailyHigh);
}

// HOURLY FORECAST x24
// Hour (i.e. Now, 9AM, 10AM, etc.)
// Conditions icon (include sunset, sunrise,
// moon icons...include rain percentage if nec.)
// Temp

function displayHourlyForecast(hours) {
  const hourlyForecastContainer = createHourlyForecastContainer();
  const hourlyForecastHeading = createHourlyForecastHeading();

  hourlyForecastHeading.textContent = "Hourly Forecast";

  content.appendChild(hourlyForecastContainer);

  hourlyForecastContainer.appendChild(hourlyForecastHeading);
}

// 10-DAY FORECAST
// Weekday (i.e. Today, Wed, Thu)
// Conditions icon (include rain percentage if nec.)
// Daily low
// Daily high

function displayTenDayForecast(days) {}
