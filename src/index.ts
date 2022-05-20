import Professor from './models/Professor';
import Student from './models/Student';

let p1 = new Professor('Siri', 'Lorem', 30, 900000, 'Math');
let p3 = new Student('Jorge', 'Ipsum', 18);
// ['Biology','Spanish']
// ['Biology','Spanish', 'Develpment']
// p3.addClass('Biology');
// p3.addClass('Spanish');

// p3.showClasses();

// p3.setClasses(['Develpment', 'Scrum', 'Git']);

// p3.showClasses();

// p3.addClass('Spanish II');

// p3.showClasses();

// p3.classes.pop();

console.log(p1);
console.log(p3);

p1.setBloodType('O');
p3.setBloodType('B');

console.log(p1);
console.log(p3);
