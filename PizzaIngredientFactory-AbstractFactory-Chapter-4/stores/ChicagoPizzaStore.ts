import {PizzaStore} from "./PizzaStore";
import {Pizza} from "../pizzas/Pizza";
import {ChessPizza} from "../pizzas/ChessPizza";
import {VeggiePizza} from "../pizzas/VeggiePizza";
import {IngredientFactory} from "../ingredients/IngredientFactory";
import {ChicagoPizzaIngredientFactory} from "../ingredients/ChicagoPizzaIngredientFactory";

export class ChicagoPizzaStore extends PizzaStore {
    protected createPizza(type: string): Pizza {
        const chicagoIngredientFactory: IngredientFactory = new ChicagoPizzaIngredientFactory();
        if(type === 'cheese'){
            return new ChessPizza(chicagoIngredientFactory)
        } else if (type === 'veggie'){
            return new VeggiePizza(chicagoIngredientFactory)
        } else {
            throw new Error("Unknown Pizza Type " + type);
        }
    }
}