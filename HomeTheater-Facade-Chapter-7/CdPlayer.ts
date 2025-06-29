import {Amplifier} from "./Amplifier";

export class CdPlayer {
    private description: string;
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

    public eject(): void {
        console.log(`${this.description} eject`);
    }

    public play(track: string): void {
        console.log(`${this.description} playing "${track}"`);
    }

    public stop(): void {
        console.log(`${this.description} stopped`);
    }

    public pause(): void {
        console.log(`${this.description} paused`);
    }
}