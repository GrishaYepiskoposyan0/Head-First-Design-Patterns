import {Clam} from "./Clam";
import {Dough} from "./Dough";
import {Sauce} from "./Sauce";
import {Cheese} from "./Cheese";
import {Veggies} from "./Veggies";
import {Pepperoni} from "./Pepperoni";

export abstract class IngredientFactory {
    abstract createDough(): Dough;
    abstract createSauce(): Sauce;
    abstract createCheese(): Cheese;
    abstract createVeggies(): Veggies[];
    abstract createPepperoni(): Pepperoni;
    abstract createClam(): Clam;
}