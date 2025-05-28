import {PizzaStore} from "./PizzaStore";
import {Pizza} from "../pizzas/Pizza";
import {NYStyleChessPizza} from "../pizzas/NYStyleChessPizza";
import {NYStyleVeggiePizza} from "../pizzas/NYStyleVeggiePizza";

export class NYPizzaStore extends PizzaStore {
    protected createPizza(type: string): Pizza {
        if(type === 'cheese'){
            return new NYStyleChessPizza()
        } else if (type === 'veggie'){
            return new NYStyleVeggiePizza()
        } else {
            throw new Error("Unknown Pizza Type " + type);
        }
    }
}