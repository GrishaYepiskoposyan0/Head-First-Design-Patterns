import {StreamingPlayer} from "./StreamingPlayer";

export class Projector {
    private description: string;
    private player: StreamingPlayer;

    constructor(description: string, player: StreamingPlayer) {
        this.description = description;
        this.player = player;
    }

    public on(): void {
        console.log(`${this.description} on`);
    }
    public off(): void {
        console.log(`${this.description} off`);
    }
    public wideScreenMode(): void {
        console.log(`${this.description} in widescreen mode (16x9 aspect ratio)`);
    }

    public toString(): string {
        return this.description;
    }
}
