"use strict";
// Functions Declarations
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
//Default params
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(10);
// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
//Arrow function
var getHellow = function (s) {
    return "";
};
//Error
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
//Function with Array 
var hero = ["thor", "spiderman", "ironmen"];
hero.map(function (superhero) {
    return "hero is ".concat(superhero);
});
// console the output
console.log(hero);
console.log(consoleError);
console.log(handleError);
console.log(getHellow);
console.log(loginUser, myValue);
console.log(signUpUser("Sachin", "Sachin@lco.dev", false));
console.log(getUpper("Here! I passed a String"));
console.log(addTwo(5));
