// Abstract class (Template)
export abstract class CaffeineBeverage {
    // Template method - final algorithm structure
    public prepareRecipe(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        if (this.customerWantsCondiments()) {
            this.addCondiments();
        }
    }

    private boilWater(): void {
        console.log("Boiling water");
    }

    private pourInCup(): void {
        console.log("Pouring into cup");
    }

    // Abstract methods (to be overridden)
    protected abstract brew(): void;
    protected abstract addCondiments(): void;

    // Hook method (optional override)
    protected customerWantsCondiments(): boolean {
        return true; // default behavior
    }
}
