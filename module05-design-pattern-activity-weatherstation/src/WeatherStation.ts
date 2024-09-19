import CurrentConditionsDisplay from './CurrentConditionsDisplay';
import WeatherData from './WeatherData';

const weatherData = new WeatherData();

// Creates new observer (for current conditions)
const currentConditions = new CurrentConditionsDisplay();
// Subscribes the observer to weatherData
weatherData.addObserver(currentConditions)

weatherData.setMeasurements(80, 65, 30.4);

weatherData.setMeasurements(82, 70, 29.2);

weatherData.setMeasurements(78, 90, 29.2);
