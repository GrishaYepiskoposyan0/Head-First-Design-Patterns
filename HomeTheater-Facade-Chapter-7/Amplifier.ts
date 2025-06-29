import {Tuner} from "./Tuner";
import {StreamingPlayer} from "./StreamingPlayer";
import {CdPlayer} from "./CdPlayer";

export class Amplifier {
    private description: string;
    private tuner?: Tuner;
    private player?: StreamingPlayer;
    private cdPlayer?: CdPlayer;

    constructor(description: string) {
        this.description = description;
    }

    public on(): void {
        console.log(`${this.description} on`);
    }
    public off(): void {
        console.log(`${this.description} off`);
    }
    public setStreamingPlayer(player: StreamingPlayer): void {
        console.log(`${this.description} setting StreamingPlayer to ${player}`);
        this.player = player;
    }
    public setSurroundSound(): void {
        console.log(`${this.description} surround sound on (5 speakers, 1 subwoofer)`);
    }
    public setVolume(level: number): void {
        console.log(`${this.description} setting volume to ${level}`);
    }
    public setTuner(tuner: Tuner): void {
        console.log(`${this.description} setting tuner to ${tuner}`);
        this.tuner = tuner;
    }

    public toString(): string {
        return this.description;
    }
}
