import {Beverage} from "./Beverage";

/// We extend from Beverage just for type matching, so we can use Interface instead of Beverage but in book it did this way to not change existing StarbuzzCoffee code
export abstract class CondimentDecorator extends Beverage {
    public abstract getDescription(): string;
}