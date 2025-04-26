import {WeatherData} from "./WeatherData";
import {ForecastDisplay} from "./ForecastDisplay";
import {DisplayElement} from "./DisplayElement";
import {CurrentConditionsDisplay} from "./CurrentConditionsDisplay";

const wd: WeatherData = new WeatherData();
const forecastDisplay: DisplayElement = new ForecastDisplay(wd);
const currentConditionDisplay: DisplayElement = new CurrentConditionsDisplay(wd);

wd.setMeasurements(1,2,3)
wd.setMeasurements(4,5,6)