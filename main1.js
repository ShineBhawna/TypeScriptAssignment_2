"use strict";
/** let message;
message = 'abc';
let endWithC = (<string>message).endsWith('c');
let alternateWay = (message as string).endsWith('c');
let log = function(message){
    console.log(message);
}
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// Defining Functions in a clean way
var doLog = function () { return console.log(); };
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Clark',
    lastName: 'Kent'
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Bhawna Verma');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager Delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Norman Reedus');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
var myConstants;
(function (myConstants) {
    myConstants[myConstants["pi"] = 3.14] = "pi";
    myConstants[myConstants["e"] = 2.75] = "e";
    myConstants[myConstants["log2"] = 0.3] = "log2";
    myConstants[myConstants["log5"] = 0.7] = "log5";
})(myConstants || (myConstants = {}));
console.log('Dinding Circumference of Circle');
var radius = 10;
console.log(2 * myConstants.pi * radius);
/** Dynamic Any Types */
var ages = 25;
ages = true;
console.log(ages);
ages = 'Hello';
console.log(ages);
ages = { name: 'Franklin' };
console.log(ages);
var mixed = [];
mixed.push(5);
mixed.push('Trevor');
mixed.push(false);
console.log(mixed);
var ninja;
ninja = { name: 'Arthur', age: 44 };
console.log(ninja);
// Arrays
var names = ['Franklin', 'Trevor', 'Arthur'];
names.push('toad');
var mixed1 = ['Michael', 8, 9];
mixed1.push('Franklin');
// Objects
var ninjas = {
    name: 'Franklin',
    belt: 'RED',
    age: 30
};
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
var basic_1 = require("./basic");
var point = new basic_1.Point(1, 2);
point.draw();
