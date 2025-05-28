import {PizzaStore} from "./PizzaStore";
import {Pizza} from "../pizzas/Pizza";
import {ChicagoStyleChessPizza} from "../pizzas/ChicagoStyleChessPizza";
import {ChicagoStyleVeggiePizza} from "../pizzas/ChicagoStyleVeggiePizza";

export class ChicagoPizzaStore extends PizzaStore {
    protected createPizza(type: string): Pizza {
        if(type === 'cheese'){
            return new ChicagoStyleChessPizza()
        } else if (type === 'veggie'){
            return new ChicagoStyleVeggiePizza()
        } else {
            throw new Error("Unknown Pizza Type " + type);
        }
    }
}