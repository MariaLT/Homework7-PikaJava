export class Team {
    constructor(
        private _id: number | null,
        private _name: string,
        private _trainer_id: number,
        private _pokemon_1: string,
        private _pokemon_2: string,
        private _pokemon_3: string,
        private _pokemon_4: string,
        private _pokemon_5: string,
        private _pokemon_6: string,
    ) {}

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get pokemon_1(): string {
        return this._pokemon_1;
    }
    public set pokemon_1(value: string) {
        this._pokemon_1 = value;
    }
    public get trainer_id(): number{
        return this._trainer_id;
    }
    public set trainer_id(value: number) {
        this._trainer_id = value;
    }
    public get id(): number | null{
        return this._id;
    }
    public set id(value: number | null) {
        this._id = value;
    }
    public get pokemon_6(): string {
        return this._pokemon_6;
    }
    public set pokemon_6(value: string) {
        this._pokemon_6 = value;
    }
    public get pokemon_5(): string {
        return this._pokemon_5;
    }
    public set pokemon_5(value: string) {
        this._pokemon_5 = value;
    }
    public get pokemon_4(): string {
        return this._pokemon_4;
    }
    public set pokemon_4(value: string) {
        this._pokemon_4 = value;
    }
    public get pokemon_3(): string {
        return this._pokemon_3;
    }
    public set pokemon_3(value: string) {
        this._pokemon_3 = value;
    }
    public get pokemon_2(): string {
        return this._pokemon_2;
    }
    public set pokemon_2(value: string) {
        this._pokemon_2 = value;
    }

    public toJSON(): any {
        return {
            id: this._id,
            name: this._name,
            trainer_id: this._trainer_id,
            pokemon_1: this._pokemon_1,
            pokemon_2: this._pokemon_2,
            pokemon_3: this._pokemon_3,
            pokemon_4: this._pokemon_4,
            pokemon_5: this._pokemon_5,
            pokemon_6: this._pokemon_6,
        };
    }
}

