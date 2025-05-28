import {MuteQuack, QuackBehavior, Squeak} from "./QuackBehavior";
import {FlyBehavior, FlyNoWay, FlyWithWings} from "./FlyBehavior";

export abstract class Duck {
    quackBehavior: QuackBehavior;
    flyBehavior: FlyBehavior;

    performFly(){
        this.flyBehavior.fly();
    }

    performQuack(){
        this.quackBehavior.quack();
    }

    abstract display(): void;

    swim(): void {
        console.log("All ducks float, even decoys!");
    }

    setFlyBehavior(flyBehavior: FlyBehavior): void {
        this.flyBehavior = flyBehavior;
    }

    setQuackBehavior(quackBehavior: QuackBehavior): void {
        this.quackBehavior = quackBehavior;
    }
}

export class MallardDuck extends Duck {
    constructor() {
        super();

        this.quackBehavior = new Squeak();
        this.flyBehavior = new FlyWithWings()
    }
    display(): void {
        console.log("I'm a Mallard Duck!");
    }

}

export class WoodenDuck extends Duck {
    constructor() {
        super();

        this.quackBehavior = new MuteQuack();
        this.flyBehavior = new FlyNoWay()
    }
    display(): void {
        console.log("I'm a Wooden Duck!");
    }

}