// Tuples : order of array is maters in Tuples 

let tuser1 : (string | number)[] = ["Structure" , 1]


let tuser2 : [string, number, boolean]
// tuser2 = [true ,123 , "test" ] 
tuser2 = ["test" , 123 , true] 


let rgb: [number , number ,number] = [255 , 123 , 112]



type Users = [number , string]
const newUser: Users = [112 , "test@gamil.com"]


//change the value
newUser[1] = "sk.com"



// newUser.push(true)



//output
console.log(tuser1);
console.log(tuser2);
console.log(rgb);
console.log(newUser);






