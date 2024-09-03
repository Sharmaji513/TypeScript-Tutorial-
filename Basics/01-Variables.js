"use strict";
// 1- Strings
Object.defineProperty(exports, "__esModule", { value: true });
var str = "Hello, TypeScript!";
str.toUpperCase();
console.log(str);
// 2- Number
var userId = 334455.3;
userId.toFixed();
// userId = "sachin"
// boolean
var isLoggedIn = false;
//3-any
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
