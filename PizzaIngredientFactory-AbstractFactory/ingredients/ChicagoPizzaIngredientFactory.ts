import {IngredientFactory} from "./IngredientFactory";
import {Dough, ThickCrustDough} from "./Dough";
import {MarinaraSauce, Sauce} from "./Sauce";
import {Cheese, MozzarellaCheese} from "./Cheese";
import {Garlic, Mushroom, Onion, RedPepper, Veggies} from "./Veggies";
import {Pepperoni} from "./Pepperoni";
import {Clam, FrozenClams} from "./Clam";


export class ChicagoPizzaIngredientFactory extends IngredientFactory {
    createDough(): Dough {
        return new ThickCrustDough();
    }
    createSauce(): Sauce {
        return new MarinaraSauce();
    }
    createCheese(): Cheese {
        return new MozzarellaCheese();
    }
    createVeggies(): Veggies[] {
        return [new Garlic(), new Onion(), new Mushroom(), new RedPepper() ];
    }
    createPepperoni(): Pepperoni {
        return new Pepperoni();
    }
    createClam(): Clam {
        return new FrozenClams();
    }
}