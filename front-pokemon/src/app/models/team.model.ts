export class Team {

    constructor(
        private _id: number,
        private __trainer_id: number,
        private _pokemon_list: string[],
    ) {}

    public get pokemon_list(): string[] {
        return this._pokemon_list;
    }
    public set pokemon_list(value: string[]) {
        this._pokemon_list = value;
    }
    public get _trainer_id(): number {
        return this.__trainer_id;
    }
    public set _trainer_id(value: number) {
        this.__trainer_id = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public toJSON(): any {
        return {
            id: this._id,
            name: this._trainer_id,
            age: this._pokemon_list,
        };
    }
}

