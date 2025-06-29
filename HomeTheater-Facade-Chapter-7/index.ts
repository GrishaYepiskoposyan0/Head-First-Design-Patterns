import { Amplifier } from "./Amplifier";
import { Tuner } from "./Tuner";
import { StreamingPlayer } from "./StreamingPlayer";
import { CdPlayer } from "./CdPlayer";
import { Projector } from "./Projector";
import { TheaterLights } from "./TheaterLights";
import { Screen } from "./Screen";
import { PopcornPopper } from "./PopcornPopper";
import { HomeTheaterFacade } from "./HomeTheaterFacade";

// Setup
const amp = new Amplifier("Top-O-Line Amplifier");
const tuner = new Tuner("Top-O-Line AM/FM Tuner", amp);
const player = new StreamingPlayer("Top-O-Line Streaming Player", amp);
const cd = new CdPlayer("Top-O-Line CD Player", amp);
const projector = new Projector("Top-O-Line Projector", player);
const screen = new Screen("Theater Screen");
const lights = new TheaterLights("Theater Ceiling Lights");
const popper = new PopcornPopper("Popcorn Popper");

// Facade
const homeTheater = new HomeTheaterFacade(
    amp,
    tuner,
    player,
    cd,
    projector,
    screen,
    lights,
    popper
);

// Action
homeTheater.watchMovie("Inception");
console.log("\n--- Movie Over ---\n");
homeTheater.endMovie();

console.log("\n--- Start Radio ---\n");
homeTheater.listenToRadio(2);
console.log("\n--- Radio Over ---\n");
homeTheater.endRadio();