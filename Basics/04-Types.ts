
type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number  //optitional
}

let myUser: User = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}


// And 
type cardDetails = cardNumber & cardDate & {
    cvv: number
}


myUser.email = "h@gmail.com"
// myUser._id = "asa"








export {}