import {NYPizzaStore} from "./stores/NYPizzaStore";
import {ChicagoPizzaStore} from "./stores/ChicagoPizzaStore";
import {PizzaStore} from "./stores/PizzaStore";

const nyStore: PizzaStore = new NYPizzaStore();
const chicagoStore: PizzaStore = new ChicagoPizzaStore();

let pizza = nyStore.orderPizza('cheese')
console.log(pizza.getName())
pizza = chicagoStore.orderPizza('veggie')
console.log(pizza.getName());