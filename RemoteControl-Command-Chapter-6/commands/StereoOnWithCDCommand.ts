import {Command} from "../Command";
import {Stereo} from "../receivers/Stereo";

export class StereoOnWithCDCommand implements Command {
    constructor(private stereo: Stereo) {
    }

    execute(): void {
        this.stereo.on();
        this.stereo.setCD()
        this.stereo.setVolume(11)
    }

    undo(): void {
        this.stereo.off();
    }
}