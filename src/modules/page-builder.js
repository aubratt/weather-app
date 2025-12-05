import * as element from "../modules/element-factory";
import * as icon from "../icons/index";
import { processWeatherData } from "../modules/form-builder";

const mainContainer = document.getElementById("main-container");

const degreeSymbol = "°";

export async function displayWeather(searchValue, cityData) {
  const { currentWeather, hourlyWeather, tenDayWeather } =
    await processWeatherData(searchValue);

  displayCurrentWeather(currentWeather, cityData);
  displayHourlyWeather(hourlyWeather, currentWeather);
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
  cityEl.textContent = `${cityData.city.toUpperCase()}, ${cityData.region.toUpperCase()}`;
  temp.textContent = currentWeather.temp + degreeSymbol;
  feelsLike.textContent = `feelsLike ${currentWeather.feelsLike}${degreeSymbol}`;
  conditionsIcon.src = icon[currentWeather.conditionsIcon];
  conditionsText.textContent = currentWeather.conditions;
  sunriseIcon.src = icon.sunrise;
  sunriseTime.textContent = formatTime(currentWeather.sunrise, true);
  sunsetIcon.src = icon.sunset;
  sunsetTime.textContent = formatTime(currentWeather.sunset, true);
  low.textContent = `Low: ${currentWeather.low}${degreeSymbol}`;
  high.textContent = `High: ${currentWeather.high}${degreeSymbol}`;
  humidity.textContent = `Humidity: ${currentWeather.humidity}%`;
  wind.textContent = `Wind: ${currentWeather.windSpeed} mph ${currentWeather.windDirection}`;

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

const numberOfVisibleHours = 10;

function displayHourlyWeather(hourlyWeather, currentWeather) {
  console.log(hourlyWeather);

  const container = element.createHourlyWeatherContainer();
  const header = element.createHourlyWeatherHeader();
  const heading = element.createHourlyWeatherHeading();
  const carousel = element.createHourlyWeatherCarousel();
  const leftArrowContainer = element.createHourlyWeatherLeftArrowContainer();
  const leftArrowIcon = element.createHourlyWeatherLeftArrowIcon();
  const rightArrowContainer = element.createHourlyWeatherRightArrowContainer();
  const rightArrowIcon = element.createHourlyWeatherRightArrowIcon();

  heading.textContent = "HOURLY WEATHER";
  leftArrowIcon.src = icon.arrowBack;
  rightArrowIcon.src = icon.arrowForward;

  mainContainer.appendChild(container);

  container.appendChild(header);
  container.appendChild(carousel);

  header.appendChild(heading);

  carousel.appendChild(leftArrowContainer);
  const carouselHours = 24;
  const currentHourIndex = getCurrentHourIndex(currentWeather.currentTime);
  let index = 1;
  for (let i = currentHourIndex; i < currentHourIndex + carouselHours; i++) {
    const hourContainer = element.createHourlyWeatherHourContainer();
    const timeContainer = element.createHourlyWeatherTimeContainer();
    const time = element.createHourlyWeatherTime();
    const conditionsIconContainer =
      element.createHourlyWeatherConditionsIconContainer();
    const conditionsIcon = element.createHourlyWeatherConditionsIcon();
    const tempContainer = element.createHourlyWeatherTempContainer();
    const temp = element.createHourlyWeatherTemp();
    const precipProbContainer =
      element.createHourlyWeatherPrecipProbContainer();
    const precipIcon = element.createHourlyWeatherPrecipIcon();
    const precipProb = element.createHourlyWeatherPrecipProb();

    if (index > numberOfVisibleHours) {
      hideHourContainer(hourContainer);
    } else {
      showHourContainer(hourContainer);
    }

    hourContainer.id = `hour-container-${index}`;
    time.textContent = formatTime(hourlyWeather[i].time, false);
    conditionsIcon.src = icon[hourlyWeather[i].conditionsIcon];
    temp.textContent = hourlyWeather[i].temp + degreeSymbol;
    precipIcon.src = icon.waterDrop;
    precipProb.textContent = hourlyWeather[i].precipProb + "%";

    carousel.appendChild(hourContainer);

    hourContainer.appendChild(timeContainer);
    hourContainer.appendChild(conditionsIconContainer);
    hourContainer.appendChild(tempContainer);
    hourContainer.appendChild(precipProbContainer);

    timeContainer.appendChild(time);

    conditionsIconContainer.appendChild(conditionsIcon);

    tempContainer.appendChild(temp);

    precipProbContainer.appendChild(precipIcon);
    precipProbContainer.appendChild(precipProb);

    index++;
  }
  carousel.appendChild(rightArrowContainer);

  leftArrowContainer.appendChild(leftArrowIcon);
  leftArrowContainer.addEventListener("click", goBackOneHour);

  rightArrowContainer.appendChild(rightArrowIcon);
  rightArrowContainer.addEventListener("click", goForwardOneHour);

  disableLeftArrow();
}

function formatTime(time, includeMinutes) {
  const [h, m] = time.split(":");
  let hour = Number(h);
  const suffix = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  return includeMinutes ? `${hour}:${m} ${suffix}` : `${hour} ${suffix}`;
}

function getCurrentHourIndex(currentTime) {
  const [h, m, s] = currentTime.split(":");

  return Number(h);
}

function goForwardOneHour() {
  // Get first visible hour container (to hide)
  const firstVisibleHour = document.querySelector(".visible-hour");
  // Get first hidden hour container (to show)
  const firstVisibleHourIdNumber = getHourContainerIdNumber(firstVisibleHour);
  const firstHiddenHourIdNumber =
    firstVisibleHourIdNumber + numberOfVisibleHours;
  const firstHiddenHour = document.getElementById(
    `hour-container-${firstHiddenHourIdNumber}`
  );

  // Hide first visible hour container
  hideHourContainer(firstVisibleHour);
  // Show first hidden hour container
  showHourContainer(firstHiddenHour);

  // If Hour 1 is now hidden, enable left arrow
  if (firstVisibleHourIdNumber > 0) {
    enableLeftArrow();
  }
  // If Hour 24 is now visible, disable right arrow
  if (firstHiddenHourIdNumber === 24) {
    disableRightArrow();
  }
}

function goBackOneHour() {
  // Get first visible hour container
  const firstVisibleHour = document.querySelector(".visible-hour");
  // Get last visible hour container (to hide)
  const firstVisibleHourIdNumber = getHourContainerIdNumber(firstVisibleHour);
  const lastVisibleHourIdNumber =
    firstVisibleHourIdNumber + numberOfVisibleHours - 1;
  const lastVisibleHour = document.getElementById(
    `hour-container-${lastVisibleHourIdNumber}`
  );
  // Get last hidden hour container (to show)
  const lastHiddenHourIdNumber = lastVisibleHourIdNumber - numberOfVisibleHours;
  const lastHiddenHour = document.getElementById(
    `hour-container-${lastHiddenHourIdNumber}`
  );

  // Hide last visible hour container
  hideHourContainer(lastVisibleHour);
  // Show last hidden hour container
  showHourContainer(lastHiddenHour);

  // If Hour 24 is now hidden, enable right arrow
  if (lastVisibleHourIdNumber < 25) {
    enableRightArrow();
  }
  // If Hour 1 is now visible, disable left arrow
  if (firstVisibleHourIdNumber === 2) {
    disableLeftArrow();
  }
}

function getHourContainerIdNumber(container) {
  const id = container.id;
  const [h, c, idNumber] = id.split("-");

  return Number(idNumber);
}

function hideHourContainer(container) {
  container.classList.add("hidden-hour");
  container.classList.remove("visible-hour");
}

function showHourContainer(container) {
  container.classList.add("visible-hour");
  container.classList.remove("hidden-hour");
}

function disableLeftArrow() {
  const container = document.getElementById(
    "hourly-weather-left-arrow-container"
  );
  const icon = document.getElementById("hourly-weather-left-arrow-icon");

  container.disabled = true;
  icon.classList.add("disabled");
}

function enableLeftArrow() {
  const container = document.getElementById(
    "hourly-weather-left-arrow-container"
  );
  const icon = document.getElementById("hourly-weather-left-arrow-icon");

  container.disabled = false;
  icon.classList.remove("disabled");
}

function disableRightArrow() {
  const container = document.getElementById(
    "hourly-weather-right-arrow-container"
  );
  const icon = document.getElementById("hourly-weather-right-arrow-icon");

  container.disabled = true;
  icon.classList.add("disabled");
}

function enableRightArrow() {
  const container = document.getElementById(
    "hourly-weather-right-arrow-container"
  );
  const icon = document.getElementById("hourly-weather-right-arrow-icon");

  container.disabled = false;
  icon.classList.remove("disabled");
}

function displayTenDayWeather(tenDayWeather) {}
