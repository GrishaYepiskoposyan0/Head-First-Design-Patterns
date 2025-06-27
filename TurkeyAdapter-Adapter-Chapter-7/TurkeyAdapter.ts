import {Turkey} from "./Turkey";
import {Duck} from "./Duck";

export class TurkeyAdapter implements Duck {
    turkey: Turkey;

    constructor(_turkey: Turkey) {
        this.turkey = _turkey;
    }

    quack(): void {
        this.turkey.gobble();
    }

    fly(): void {
        for (let i = 0; i < 5; i++) {
            this.turkey.fly();
        }
    }
}