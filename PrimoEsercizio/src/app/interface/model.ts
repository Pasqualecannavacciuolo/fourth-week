import { IDog, DogItem } from "./dog";
export class Model {
    items: Array<IDog> = [];
    constructor(){
        this.items.push(new DogItem("Pasquale", "password123", "p.email@libero.it"));
        this.items.push(new DogItem("Pasquale", "password123", "p.email@libero.it"));
        this.items.push(new DogItem("Pasquale", "password123", "p.email@libero.it"));
        this.items.push(new DogItem("Pasquale", "password123", "p.email@libero.it"));
    }

}