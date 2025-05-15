export abstract class Pizza {
    name!: string;

    prepare() {
        console.log(`Preparing ${this.name}`);
    }

    bake(){
        console.log(`Bake ${this.name}`);
    }

    cut(){
        console.log(`Cutting ${this.name}`);
    }

    box(){
        console.log(`Boxing ${this.name}`);
    }

    getName(){
        return this.name;
    }
}