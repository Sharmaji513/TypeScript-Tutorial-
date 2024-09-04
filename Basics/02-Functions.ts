// Functions Declarations

function addTwo(num:number){
    return num + 2;
}


function getUpper(val:string){
    return val.toUpperCase()
}


function signUpUser(name:string , email:string , isPaid:boolean){}


//Default params
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let myValue = addTwo(10)


// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }



//Arrow function
const getHellow = (s:string):string => {
    return ""
}


//Error
function consoleError(errmsg: string): void{
    console.log(errmsg);
    
}
function handleError(errmsg: string): never{
    throw new Error(errmsg);
    
}


//Function with Array 
const hero = ["thor" , "spiderman" , "ironmen"]

hero.map((superhero):string =>{
    return `hero is ${superhero}`
})


// console the output
console.log(hero);

console.log(consoleError);

console.log(handleError);



console.log(getHellow);


console.log(loginUser , myValue);

console.log(signUpUser("Sachin", "Sachin@lco.dev", false));

console.log(getUpper("Here! I passed a String"));

console.log(addTwo(5));


export {}