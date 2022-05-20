export default class Person {
  name: string;
  last_name: string;
  age: number;
  blood_type: string = 'A';

  constructor(name: string, last_name: string, age: number) {
    this.name = name;
    this.last_name = last_name;
    this.age = age;
  }

  getFullName(): string {
    return `${this.name} ${this.last_name}`;
  }

  setBloodType(btype: string) {
    this.blood_type = btype;
  }
}
