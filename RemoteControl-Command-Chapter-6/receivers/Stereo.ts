export class Stereo {
    constructor(private location: string) {}

    on(): void {
        console.log(`${this.location} stereo is ON`);
    }

    setCD(): void {
        console.log("CD is set");
    }

    setVolume(level: number): void {
        console.log(`Volume set to ${level}`);
    }

    off(): void {
        console.log(`${this.location} stereo is OFF`);
    }
}