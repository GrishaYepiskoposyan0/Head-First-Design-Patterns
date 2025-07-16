import {CaffeineBeverage} from "./CaffeineBeverage";

export class Tea extends CaffeineBeverage {
    protected brew(): void {
        console.log("Steeping the tea");
    }

    protected addCondiments(): void {
        console.log("Adding lemon");
    }

    protected customerWantsCondiments(): boolean {
        return true; // or prompt user
    }
}
