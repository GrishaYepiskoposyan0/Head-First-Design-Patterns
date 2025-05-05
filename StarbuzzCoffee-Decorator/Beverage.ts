export abstract class Beverage {
    description: string = 'Unknown Description';

    getDescription(){
        return this.description;
    }
    abstract cost(): number;
}