import * as element from "../modules/element-factory";
import * as icon from "../icons/index";
import { processWeatherData } from "../modules/form-builder";

const mainContainer = document.getElementById("main-container");

const degreeSymbol = "°";

export async function displayWeather(searchValue, cityData) {
  const { currentWeather, hourlyWeather, tenDayWeather } =
    await processWeatherData(searchValue);

  displayCurrentWeather(currentWeather, cityData);
  displayHourlyWeather(hourlyWeather);
  displayTenDayWeather(tenDayWeather);
}

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
  const sunriseIcon = element.createCurrentWeatherSunriseIcon();
  const sunriseTime = element.createCurrentWeatherSunriseTime();
  const sunsetIcon = element.createCurrentWeatherSunsetIcon();
  const sunsetTime = element.createCurrentWeatherSunsetTime();
  const lowHighContainer = element.createCurrentWeatherLowHighContainer();
  const low = element.createCurrentWeatherLow();
  const high = element.createCurrentWeatherHigh();
  const humidityWindContainer =
    element.createCurrentWeatherHumidityWindContainer();
  const humidity = element.createCurrentWeatherHumidity();
  const wind = element.createCurrentWeatherWind();

  // Convert windspeed and direction values if undefined
  if (currentWeather.windSpeed === undefined) {
    currentWeather.windSpeed = 0;
  } 
  if (currentWeather.windDirection === undefined) {
    currentWeather.windDirection = "";
  }

  heading.textContent = "CURRENT WEATHER";
  cityEl.textContent = `${cityData.city.toUpperCase()}, ${cityData.regionCode}`;
  temp.textContent = currentWeather.temp + degreeSymbol;
  feelsLike.textContent = `feelsLike ${currentWeather.feelsLike}${degreeSymbol}`;
  conditionsIcon.src = icon[currentWeather.conditionsIcon];
  conditionsText.textContent = currentWeather.conditions;
  sunriseIcon.src = icon.sunrise;
  sunriseTime.textContent = currentWeather.sunrise;
  sunsetIcon.src = icon.sunset;
  sunsetTime.textContent = currentWeather.sunset;
  low.textContent = `Low: ${currentWeather.low}${degreeSymbol}`;
  high.textContent = `High: ${currentWeather.high}${degreeSymbol}`;
  humidity.textContent = `Humidity: ${currentWeather.humidity}%`;
  wind.textContent = `Wind: ${currentWeather.windSpeed} MPH ${currentWeather.windDirection}`;

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

  sunContainer.appendChild(sunriseIcon);
  sunContainer.appendChild(sunriseTime);
  sunContainer.appendChild(sunsetIcon);
  sunContainer.appendChild(sunsetTime);

  lowHighContainer.appendChild(low);
  lowHighContainer.appendChild(high);

  humidityWindContainer.appendChild(humidity);
  humidityWindContainer.appendChild(wind);
}

function displayHourlyWeather(hourlyWeather) {}

function displayTenDayWeather(tenDayWeather) {}
