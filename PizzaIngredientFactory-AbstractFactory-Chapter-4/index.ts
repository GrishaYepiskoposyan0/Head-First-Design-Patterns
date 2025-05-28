import {NYPizzaStore} from "./stores/NYPizzaStore";
import {ChicagoPizzaStore} from "./stores/ChicagoPizzaStore";
import {PizzaStore} from "./stores/PizzaStore";
import {Pizza} from "./pizzas/Pizza";

const nyStore: PizzaStore = new NYPizzaStore();
const chicagoStore: PizzaStore = new ChicagoPizzaStore();

let pizza:Pizza = nyStore.orderPizza('cheese')
pizza.log()
pizza = chicagoStore.orderPizza('veggie')
pizza.log()