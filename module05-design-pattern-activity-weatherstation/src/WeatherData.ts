import StatisticsDisplay from './StatisticsDisplay';
import ForecastDisplay from './ForecastDisplay';
import CurrentConditionsDisplay from './CurrentConditionsDisplay';
import HeatIndexDisplay from './HeatIndexDisplay';
import { IWeatherDataObserver } from './WeatherDataObserver';

export default class WeatherData {
  private _temperature = 0;
  
  private observer: IWeatherDataObserver[] = []

  public addObserver(obs:IWeatherDataObserver): void {
    this.observer.push(obs);
  }

  public removeObserver(obs:IWeatherDataObserver): void {
    this.observer = this.observer.filter((item) => item !== obs);
  }

  get temperature(): number {
    return this._temperature;
  }

  private _humidity = 0;

  get humidity(): number {
    return this._humidity;
  }

  private _pressure = 0;

  get pressure(): number {
    return this._pressure;
  }

  private _statisticsDisplay = new StatisticsDisplay();

  private _forecastDisplay = new ForecastDisplay();

  public setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this._temperature = temperature;
    this._humidity = humidity;
    this._pressure = pressure;
    this.measurementsChanged();
  }

  private measurementsChanged() {
    //  6) Order is now different because it is based on order we added the Displays
    this.notifyAll()

    // Not needed anymore (I think)
    // this._statisticsDisplay.displayStatistics(this);
    // this._forecastDisplay.displayForecast(this);
    // CurrentConditionsDisplay.displayCurrentConditions(this);
    // HeatIndexDisplay.displayHeatIndex(this);
  }

  //  Double check this is right
  private notifyAll() {
    this.observer.forEach(obs => obs.update(this))
  }
}
