let score:number | string = 23
score = 44
score = "55"


type User ={
    name: string;
    id: number
}

type Admin = {
    uername: string;
    id: number
}

let sachin:User | Admin = { name: "sachin", id:334}
// sachin = {username:"sharma" , id:334}


function getDbId(id:number | string){
    // id.lowerCase()
    if(typeof id ==="string"){
        id.toLowerCase()
    }
    
}


//array Unions

const data: number[] = [1,2,3,]
const data2: string[] = ["1","2","4"]
const data3: string[] | number[] = ["1","2","4"]
const data4: (string | number | boolean)[] = ["1", "2", 3, true]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"