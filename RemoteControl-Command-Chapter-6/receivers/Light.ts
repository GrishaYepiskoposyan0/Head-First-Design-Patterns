export class Light {
    constructor(private location: string) {}

    on(): void {
        console.log(`${this.location} light is ON`);
    }

    off(): void {
        console.log(`${this.location} light is OFF`);
    }
}