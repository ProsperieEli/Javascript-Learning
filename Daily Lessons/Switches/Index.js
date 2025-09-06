//If you are using multiple if/else statements. You can instead use a Switch case. 

let day = 4;

let message;
if (day == 1) {
    message = "it is monday!"
} else if (day == 2) {
   message =  "It is Tuesday"
} else if (day == 3) {
    message = "It is Wednesday"
} else if (day == 4) {
    message = "It is Thursday"
} else if (day == 5) {
    message = "It is Friday"
} else if (day == 6) {
    message = "it is Satuday"
} else if (day == 7) {
    message = "It is Sunday"
} else {
    message = "Not a day"
}

//instead write:

switch (day) {
    case 1: 
        message = "It is Monday."
        break
    case 2: 
        message = "It is Tuesday"
        break
    case 3: 
        message = "It is Wednesday"
        break
    case 4: 
        message = "It is Thursday"
        break
    case 5:
        message = "It is Friday"
        break
    case 6: 
        message = "It is Saturday"
        break
    case 7:
        message = "It is Sunday."
        break
    default:
        "not a valid day entry."
        break
}

console.log(message)