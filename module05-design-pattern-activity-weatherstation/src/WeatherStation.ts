import CurrentConditionsDisplay from './CurrentConditionsDisplay';
import ForecastDisplay from './ForecastDisplay';
import HeatIndexDisplay from './HeatIndexDisplay';
import StatisticsDisplay from './StatisticsDisplay';
import WeatherData from './WeatherData';

const weatherData = new WeatherData();

// Creates new observers
const currentConditions = new CurrentConditionsDisplay();
const forecastDisplay = new ForecastDisplay();
const heatIndexDisplay = new HeatIndexDisplay();
const statisticsDisplay = new StatisticsDisplay();

// Subscribes the observer to weatherData
weatherData.addObserver(currentConditions)
weatherData.addObserver(forecastDisplay)
weatherData.addObserver(heatIndexDisplay)
weatherData.addObserver(statisticsDisplay)


weatherData.setMeasurements(80, 65, 30.4);

weatherData.setMeasurements(82, 70, 29.2);

weatherData.setMeasurements(78, 90, 29.2);
