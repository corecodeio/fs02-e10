"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, last_name, age) {
        this.blood_type = 'A';
        this.name = name;
        this.last_name = last_name;
        this.age = age;
    }
    getFullName() {
        return `${this.name} ${this.last_name}`;
    }
    setBloodType(btype) {
        this.blood_type = btype;
    }
}
exports.default = Person;
