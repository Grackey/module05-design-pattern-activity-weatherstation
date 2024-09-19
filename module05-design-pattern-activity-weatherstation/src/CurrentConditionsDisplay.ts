import WeatherData from './WeatherData';
import { IWeatherDataObserver } from './WeatherDataObserver';

export default class CurrentConditionsDisplay implements IWeatherDataObserver{

  static displayCurrentConditions(weatherData: WeatherData): void {
    // eslint-disable-next-line
    console.log('Current conditions: %fF degrees and %f% humidity', weatherData.temperature, weatherData.humidity);
  }

  update(weatherData: WeatherData): void {
    console.log('Current conditions: %fF degrees and %f% humidity', weatherData.temperature, weatherData.humidity);
  }
}
