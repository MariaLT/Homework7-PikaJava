export class Trainer {
    constructor(
        private _id: number | null,
        private _name: string,
        private _age: number,
        private _hobby: string,
        private _photo: string = 'https://www.seekpng.com/png/detail/242-2421423_pokemon-trainer-sprite-png-pixel-pokemon-trainer-sprites.png'
    ) { }

    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): number | null {
        return this._id;
    }
    public set id(value: number | null) {
        this._id = value;
    }
    public get hobby(): string {
        return this._hobby;
    }
    public set hobby(value: string) {
        this._hobby = value;
    }
    public get photo(): string {
        return this._photo;
    }
    public set photo(value: string) {
        this._photo = value;
    }

    public toJSON(): any {
        return {
            id: this._id,
            name: this._name,
            age: this._age,
            hobby: this._hobby,
            photo: this._photo
        };
    }
}