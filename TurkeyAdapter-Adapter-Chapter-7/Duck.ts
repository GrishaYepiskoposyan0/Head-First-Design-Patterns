export interface Duck {
    quack(): void;
    fly(): void;
}

export class MallardDuck implements Duck {
    fly(): void {
        console.log('Quack')
    }

    quack(): void {
        console.log("I'm flying")
    }

}