import {IngredientFactory} from "./IngredientFactory";
import {Dough, ThinCrustDough} from "./Dough";
import {PlumTomatoSauce, Sauce} from "./Sauce";
import {Cheese, ReggianoCheese} from "./Cheese";
import {Garlic, Mushroom, Onion, RedPepper, Veggies} from "./Veggies";
import {Pepperoni} from "./Pepperoni";
import {Clam, FreshClams} from "./Clam";


export class NYPizzaIngredientFactory extends IngredientFactory {
    createDough(): Dough {
        return new ThinCrustDough();
    }
    createSauce(): Sauce {
        return new PlumTomatoSauce();
    }
    createCheese(): Cheese {
        return new ReggianoCheese();
    }
    createVeggies(): Veggies[] {
        return [new Garlic(), new Onion(), new Mushroom(), new RedPepper() ];
    }
    createPepperoni(): Pepperoni {
        return new Pepperoni();
    }
    createClam(): Clam {
        return new FreshClams();
    }
}