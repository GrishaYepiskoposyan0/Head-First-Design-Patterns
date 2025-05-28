export class ChocolateBoiler {
    private empty: boolean;
    private boiled: boolean;
    private static instance: ChocolateBoiler;

    private constructor() {
        this.empty = true;
        this.boiled = false;
    }

    static getInstance(): ChocolateBoiler {
        if(!this.instance){
            this.instance = new ChocolateBoiler();
        }
        return this.instance
    }

    fill(): void {
        if(this.empty){
            this.empty = false;
            this.boiled = true;
        }
    }

    drain(): void {
        if (!this.empty && this.boiled) {
            this.empty = true;
        }
    }

    boil(): void {
        if (!this.boiled && !this.empty) {
            this.boiled = true;
        }
    }
}