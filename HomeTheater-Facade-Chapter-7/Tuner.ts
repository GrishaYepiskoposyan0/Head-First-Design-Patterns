import {Amplifier} from "./Amplifier";

export class Tuner {
    private description: string;
    private amp: Amplifier;
    private frequency: number = 0;

    constructor(description: string, amp: Amplifier) {
        this.description = description;
        this.amp = amp;
    }

    public on(): void {
        console.log(`${this.description} on`);
    }

    public off(): void {
        console.log(`${this.description} off`);
    }

    public setFrequency(frequency: number): void {
        this.frequency = frequency;
        console.log(`${this.description} setting frequency to ${frequency}`);
    }

    public setAm(): void {
        console.log(`${this.description} setting AM mode`);
    }

    public setFm(): void {
        console.log(`${this.description} setting FM mode`);
    }
}