import {ChocolateBoiler} from "./ChocolateBoiler";

const boiler = ChocolateBoiler.getInstance();
boiler.fill();
boiler.boil();
boiler.drain();

if(boiler === ChocolateBoiler.getInstance()){
    console.log('Singleton works!!!')
}