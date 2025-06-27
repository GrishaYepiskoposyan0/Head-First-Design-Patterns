import {Duck, MallardDuck} from "./Duck";
import {WildTurkey} from "./Turkey";
import {TurkeyAdapter} from "./TurkeyAdapter";

const duck: Duck = new MallardDuck()
const turkey = new WildTurkey()
const turkeyAdapter = new TurkeyAdapter(turkey);

console.log("The Turkey says...")
turkey.gobble();
turkey.fly();

console.log('The Duck says...');
duck.quack();
duck.fly();

console.log('The Turkey Adapter Says...');
turkeyAdapter.quack();
turkeyAdapter.fly();
