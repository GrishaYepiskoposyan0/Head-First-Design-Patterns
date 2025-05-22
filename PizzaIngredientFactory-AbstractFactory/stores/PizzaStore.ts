import {Pizza} from "../pizzas/Pizza";

export abstract class PizzaStore {
    orderPizza(type: string): Pizza {
        const pizza: Pizza = this.createPizza(type);

        pizza.prepare()
        pizza.bake()
        pizza.cut()
        pizza.box()

        return pizza;
    }

    protected abstract createPizza(type: string): Pizza;
}