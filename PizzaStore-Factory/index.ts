import {NYPizzaStore} from "./stores/NYPizzaStore";
import {ChicagoPizzaStore} from "./stores/ChicagoPizzaStore";

const nyStore = new NYPizzaStore();
const chicagoStore = new ChicagoPizzaStore();

let pizza = nyStore.orderPizza('cheese')
console.log(pizza.getName())
pizza = chicagoStore.orderPizza('veggie')
console.log(pizza.getName());