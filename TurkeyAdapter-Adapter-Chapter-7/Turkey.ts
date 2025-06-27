export interface Turkey {
    gobble(): void;
    fly(): void;
}
export class WildTurkey implements Turkey {
    fly(): void {
        console.log("I'm flying a short distance")
    }

    gobble(): void {
        console.log('Gobble gobble')
    }

}