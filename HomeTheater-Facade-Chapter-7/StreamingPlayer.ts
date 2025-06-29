import {Amplifier} from "./Amplifier";

export class StreamingPlayer {
    private description: string;
    private currentMovie: string | null = null;
    private amp: Amplifier;

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

    public play(movie: string): void {
        this.currentMovie = movie;
        console.log(`${this.description} playing "${movie}"`);
    }

    public stop(): void {
        console.log(`${this.description} stopped "${this.currentMovie}"`);
        this.currentMovie = null;
    }

    public pause(): void {
        console.log(`${this.description} paused "${this.currentMovie}"`);
    }
}