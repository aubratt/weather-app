import "./styles.css";
import "./form-builder.js";
import { displayWeather } from "./page-builder.js";

const cityData = {
  city: "New York City",
  country: "United States",
  latitude: 40.712777777,
  longitude: -74.006111111,
  region: "New York",
  regionCode: "NY",
};

displayWeather(`${cityData.latitude}, ${cityData.longitude}`, cityData);
