import {Amplifier} from "./Amplifier";
import {Tuner} from "./Tuner";
import {StreamingPlayer} from "./StreamingPlayer";
import {CdPlayer} from "./CdPlayer";
import {Projector} from "./Projector";
import {TheaterLights} from "./TheaterLights";
import {PopcornPopper} from "./PopcornPopper";
import {Screen} from "./Screen";

export class HomeTheaterFacade {
    constructor(
        private amp: Amplifier,
        private tuner: Tuner,
        private player: StreamingPlayer,
        private cd: CdPlayer,
        private projector: Projector,
        private screen: Screen,
        private lights: TheaterLights,
        private popper: PopcornPopper
    ) {}

    public watchMovie(movie: string): void {
        console.log("Get ready to watch a movie...");
        this.popper.on();
        this.popper.pop();
        this.lights.dim(10);
        this.screen.down();
        this.projector.on();
        this.projector.wideScreenMode();
        this.amp.on();
        this.amp.setStreamingPlayer(this.player);
        this.amp.setSurroundSound();
        this.amp.setVolume(5);
        this.player.on();
        this.player.play(movie);
    }

    public endMovie(): void {
        console.log("Shutting movie theater down...");
        this.popper.off();
        this.lights.on();
        this.screen.up();
        this.projector.off();
        this.amp.off();
        this.player.stop();
        this.player.off();
    }

    public listenToRadio(frequency: number): void {
        console.log("Tuning in the airwaves...");
        this.tuner.on();
        this.tuner.setFrequency(frequency);
        this.amp.on();
        this.amp.setVolume(5);
        this.amp.setTuner(this.tuner);
    }

    public endRadio(): void {
        console.log("Shutting down the tuner...");
        this.tuner.off();
        this.amp.off();
    }
}
