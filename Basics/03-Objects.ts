// const User = {
//     name: "sharmaji",
//     email: "shramaji@lco.dev",
//     isAvtive: true
// }


function createUser({name: string , isPaid:boolean}){}
let newUser = {name: "sachin", isPaid: false, email: "s@h.com"}
console.log(createUser(newUser));





// returning object
function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}

console.log(createCourse());
