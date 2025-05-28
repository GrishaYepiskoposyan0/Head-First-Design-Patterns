import {Duck, MallardDuck} from "./Duck";
import {MuteQuack} from "./QuackBehavior";
import {FlyNoWay} from "./FlyBehavior";

const duck: Duck = new MallardDuck();
duck.display()
duck.performQuack()
duck.performFly()
duck.setFlyBehavior(new FlyNoWay())
duck.setQuackBehavior(new MuteQuack())
duck.performQuack()
duck.performFly()
