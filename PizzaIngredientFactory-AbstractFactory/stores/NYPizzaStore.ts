import {PizzaStore} from "./PizzaStore";
import {Pizza} from "../pizzas/Pizza";
import {ChessPizza} from "../pizzas/ChessPizza";
import {VeggiePizza} from "../pizzas/VeggiePizza";
import {IngredientFactory} from "../ingredients/IngredientFactory";
import {NYPizzaIngredientFactory} from "../ingredients/NYPizzaIngredientFactory";

export class NYPizzaStore extends PizzaStore {
    protected createPizza(type: string): Pizza {
        const nyIngredientFactory: IngredientFactory = new NYPizzaIngredientFactory();
        if(type === 'cheese'){
            return new ChessPizza(nyIngredientFactory)
        } else if (type === 'veggie'){
            return new VeggiePizza(nyIngredientFactory)
        } else {
            throw new Error("Unknown Pizza Type " + type);
        }
    }
}