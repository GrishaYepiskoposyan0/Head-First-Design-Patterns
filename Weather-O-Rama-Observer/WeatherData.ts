import {Subject} from "./Subject";
import {Observer} from "./Observer";

export class WeatherData implements Subject {
    private readonly observers: Set<Observer>;
    private temperature: number;
    private humidity: number;
    private pressure: number;


    constructor() {
        this.observers = new Set<Observer>();
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    }

    registerObserver(o: Observer): void {
        this.observers.add(o);
    }

    removeObserver(o: Observer): void {
        if(this.observers.has(o)) {
            this.observers.delete(o);
        }
    }

    setMeasurements(temperature: number, humidity: number, pressure: number){
        this.humidity = humidity;
        this.pressure = pressure;
        this.temperature = temperature;
        this.measurementChanged();
    }

    getTemperature() {

    }

    getHumidity() {

    }

    getPressure() {

    }

    measurementChanged() {
        this.notifyObservers();
    }
}