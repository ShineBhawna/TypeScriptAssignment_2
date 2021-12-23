/** let message;
message = 'abc';
let endWithC = (<string>message).endsWith('c');
let alternateWay = (message as string).endsWith('c');
let log = function(message){
    console.log(message);
}
*/

// Defining Functions in a clean way

let doLog = () => console.log();

/**Interface Method */

interface Person {
    firstName: string;
    lastName: string;
}

function fullName(person : Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p= {
    firstName: 'Clark',
    lastName: 'Kent'
};  

fullName(p);

class Employee{
    employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let emp1= new Employee('Bhawna Verma');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }

    delegateWork(){
        console.log(`Manager Delegating tasks`);
    }
}

let m1 = new Manager('Norman Reedus');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

enum myConstants{
    pi = 3.14,
    e = 2.75,
    log2= 0.3,
    log5= 0.7,
}

console.log('Dinding Circumference of Circle');

let radius: number =10;

console.log(2 * myConstants.pi * radius);

/** Aliases */

type stringOrNum = string | number;

/** Dynamic Any Types */

let ages: any = 25;

ages = true;
console.log(ages);
ages = 'Hello';
console.log(ages);
ages = {name: 'Franklin'};
console.log(ages);

let mixed: any[] = [];

mixed.push(5);
mixed.push('Trevor');
mixed.push(false);
console.log(mixed);

let ninja: {name: any, age: any};

ninja = {name: 'Arthur', age: 44};

console.log(ninja);

// Arrays

let names = ['Franklin', 'Trevor', 'Arthur'];
names.push('toad');

let mixed1= ['Michael', 8, 9];
mixed1.push('Franklin');

// Objects

let ninjas = {
    name: 'Franklin',
    belt: 'RED',
    age: 30
}

// Classes

/** class Point{
    x: number;
    y:number;
    constructor(x?: number, y?:number){
        this.x=x;
        this.y=y;
    }
    draw(){
        console.log('X: ' + this.x +  'Y: '+ this.y );
    }
} */

/** Object */

import {Point} from './basic';

let point = new Point(1,2);
point.draw();