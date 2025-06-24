import {Command} from "../Command";
import {Light} from "../receivers/Light";

export class LightOnCommand implements Command {
    constructor(private light: Light) {
    }

    execute() {
        this.light.on()
    }

    undo(): void {
        this.light.off()
    }
}