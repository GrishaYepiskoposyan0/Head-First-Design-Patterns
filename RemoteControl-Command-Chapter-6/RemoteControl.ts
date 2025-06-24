import {Command} from "./Command";
import {NoCommand} from "./commands/NoCommand";

export class RemoteControl {
    private onCommands: Command[] = []
    private offCommands: Command[] = []
    private lastCommand: Command = new NoCommand();

    constructor() {
        for (let i = 0; i < 7; i++) {
            this.onCommands[i] = new NoCommand();
            this.offCommands[i] = new NoCommand();
        }
    }

    setCommand(slot: number, onCommand: Command, offCommand: Command): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    pressOnButton(slot: number): void {
        console.log(`--- Pressed ON button for slot ${slot}`);
        this.onCommands[slot].execute();
        this.lastCommand = this.onCommands[slot];
    }

    pressOffButton(slot: number): void {
        console.log(`--- Pressed OFF button for slot ${slot}`);
        this.offCommands[slot].execute();
        this.lastCommand = this.offCommands[slot];
    }

    pressUndoButton(): void {
        console.log(`--- Pressed UNDO button`);
        this.lastCommand.undo();
    }
}