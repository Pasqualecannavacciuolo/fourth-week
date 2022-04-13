export interface IDog {
    breed: string
    name: string
    description: string
}

export class DogItem implements IDog{
    breed: string
    name: string
    description: string

    constructor(breed: string, name: string, description: string) {
        this.breed = breed;
        this.name = name;
        this.description = description;
    }
}