import * as element from "../modules/element-factory";
import { processWeatherData } from "../modules/form-builder";

const mainContainer = document.getElementById("main-container");

const degreeSymbol = "°";

export async function displayWeather(searchValue, cityData) {
  // clearContent();

  const { currentWeather, hourlyWeather, tenDayWeather } =
    await processWeatherData(searchValue);

  displayCurrentWeather(currentWeather, cityData);
  displayHourlyWeather(hourlyWeather);
  displayTenDayWeather(tenDayWeather);
}

function clearContent() {}

function displayCurrentWeather(currentWeather, cityData) {
  const container = element.createCurrentWeatherContainer();
  const headerContainer = element.createCurrentWeatherHeaderContainer();
  const heading = element.createCurrentWeatherHeading();
  const cityEl = element.createCurrentWeatherCity();
  const tempContainer = element.createCurrentWeatherTempContainer();
  const temp = element.createCurrentWeatherTemp();
  const feelsLike = element.createCurrentWeatherFeelsLike();
  const conditionsContainer = element.createCurrentWeatherConditionsContainer();
  const conditionsIcon = element.createCurrentWeatherConditionsIcon();
  const conditionsText = element.createCurrentWeatherConditionsText();
  const sunContainer = element.createCurrentWeatherSunContainer();
  const sunrise = element.createCurrentWeatherSunrise();
  const sunset = element.createCurrentWeatherSunset();
  const lowHighContainer = element.createCurrentWeatherLowHighContainer();
  const low = element.createCurrentWeatherLow();
  const high = element.createCurrentWeatherHigh();
  const humidityWindContainer =
    element.createCurrentWeatherHumidityWindContainer();
  const humidity = element.createCurrentWeatherHumidity();
  const wind = element.createCurrentWeatherWind();

  heading.textContent = "CURRENT WEATHER";
  cityEl.textContent = `${cityData.city.toUpperCase()}, ${cityData.regionCode}`;
  temp.textContent = currentWeather.temp + degreeSymbol;
  feelsLike.textContent = `feelsLike ${currentWeather.feelsLike}${degreeSymbol}`;
  conditionsText.textContent = currentWeather.conditions;
  sunrise.textContent = currentWeather.sunrise;
  sunset.textContent = currentWeather.sunset;
  low.textContent = currentWeather.low;
  high.textContent = currentWeather.high;
  humidity.textContent = currentWeather.humidity;
  wind.textContent = `${currentWeather.windSpeed} MPH ${currentWeather.windDirection}`;

  mainContainer.appendChild(container);

  container.appendChild(headerContainer);
  container.appendChild(tempContainer);
  container.appendChild(conditionsContainer);
  container.appendChild(sunContainer);
  container.appendChild(lowHighContainer);
  container.appendChild(humidityWindContainer);

  headerContainer.appendChild(heading);
  headerContainer.appendChild(cityEl);

  tempContainer.appendChild(temp);
  tempContainer.appendChild(feelsLike);

  conditionsContainer.appendChild(conditionsIcon);
  conditionsContainer.appendChild(conditionsText);

  sunContainer.appendChild(sunrise);
  sunContainer.appendChild(sunset);

  lowHighContainer.appendChild(low);
  lowHighContainer.appendChild(high);

  humidityWindContainer.appendChild(humidity);
  humidityWindContainer.appendChild(wind);
}

function displayHourlyWeather(hourlyWeather) {}

function displayTenDayWeather(tenDayWeather) {}
