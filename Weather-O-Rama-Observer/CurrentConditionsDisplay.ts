import {Observer} from "./Observer";
import {DisplayElement} from "./DisplayElement";
import {Subject} from "./Subject";

export class CurrentConditionsDisplay implements Observer, DisplayElement {
    private temperature: number;
    private humidity: number;
    private weatherData: Subject;

    constructor(weatherData:Subject) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }

    display(): void {
        console.log(`Current conditions: ${this.temperature} C and ${this.humidity}% humidity`);
    }

    update(temperature: number, humidity: number, pressure: number): void {
        this.humidity = humidity;
        this.temperature = temperature;
        this.display();
    }

}