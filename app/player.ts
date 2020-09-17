// /// <reference path="Person.ts" />

import { Person } from "./Person";

export class Player implements Person {

    name: string;
    age?: number | undefined;

    formatName() {
        return this.name.toLocaleUpperCase();
    }
}