import {CaffeineBeverage} from "./CaffeineBeverage";

export class Coffee extends CaffeineBeverage {
    protected brew(): void {
        console.log("Dripping Coffee through filter");
    }

    protected addCondiments(): void {
        console.log("Adding sugar and milk");
    }

    protected customerWantsCondiments(): boolean {
        return false; // simulate user choosing no condiments
    }
}
