export interface FlyBehavior {
    fly(): void;
}

export class FlyWithWings implements FlyBehavior {
    fly() {
        console.log("I'm flying!");
    }
}

export class FlyNoWay implements FlyBehavior {
    fly() {
        console.log("I can't fly!");
    }
}