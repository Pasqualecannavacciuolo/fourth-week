import { IUser, UserItem } from "./user";
export class Model {
    items: Array<IUser> = [];
    constructor(){
        this.items.push(new UserItem(1, "Pasquale", "password123", "p.email@libero.it", true));
        this.items.push(new UserItem(2, "Pasquale", "password123", "p.email@libero.it", true));
        this.items.push(new UserItem(3, "Pasquale", "password123", "p.email@libero.it", true));
        this.items.push(new UserItem(4, "Pasquale", "password123", "p.email@libero.it", true));
    }

}