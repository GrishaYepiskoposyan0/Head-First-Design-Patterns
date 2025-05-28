import {HouseBlend} from "./HouseBlend";
import {Mocha} from "./Mocha";
import {Whip} from "./Whip";

let beverage = new HouseBlend();
beverage = new Mocha(beverage);
beverage = new Mocha(beverage);
beverage = new Whip(beverage);
console.log(beverage.getDescription() + `, $${beverage.cost()}`)