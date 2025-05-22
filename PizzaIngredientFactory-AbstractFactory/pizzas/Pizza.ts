import {Clam} from "../ingredients/Clam";
import {Cheese} from "../ingredients/Cheese";
import {Veggies} from "../ingredients/Veggies";
import {Sauce} from "../ingredients/Sauce";
import {Dough} from "../ingredients/Dough";
import {Pepperoni} from "../ingredients/Pepperoni";

export abstract class Pizza {
    name: string;
    dough: Dough;
    sauce: Sauce;
    veggies: Veggies[];
    cheese: Cheese;
    pepperoni: Pepperoni;
    clam: Clam;

    abstract prepare(): void;

    bake(){
        console.log(`Bake ${this.name}`);
    }

    cut(){
        console.log(`Cutting ${this.name}`);
    }

    box(){
        console.log(`Boxing ${this.name}`);
    }

    log(){
        console.log(this.dough)
    }
}