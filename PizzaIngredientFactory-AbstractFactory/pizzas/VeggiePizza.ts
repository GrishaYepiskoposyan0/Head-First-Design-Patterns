import { Pizza } from "./Pizza";
import {IngredientFactory} from "../ingredients/IngredientFactory";

export class VeggiePizza extends Pizza {
    ingredientFactory: IngredientFactory;
    constructor(ingredientFactory: IngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
        this.name = "Veggie Pizza";
    }

    prepare() {
        console.log("Preparing " + this.name);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.veggies = this.ingredientFactory.createVeggies();
    }
}
