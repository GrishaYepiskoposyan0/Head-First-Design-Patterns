import { Pizza } from "./Pizza";
import {IngredientFactory} from "../ingredients/IngredientFactory";

export class ChessPizza extends Pizza {
    ingredientFactory: IngredientFactory;
    constructor(ingredientFactory: IngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
        this.name = "Chess Pizza";
    }

    prepare() {
        console.log("Preparing " + this.name);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    }
}
