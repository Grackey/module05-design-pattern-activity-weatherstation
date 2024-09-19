import WeatherData from "./WeatherData";


export interface IWeatherDataObserver {
    update(weatherData: WeatherData):void
}