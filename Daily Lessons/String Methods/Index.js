//String methods are methods that allow the manipulation of strings. 

let username = "Techno Dev"

//.charAt() gives character at a specific index.
console.log(username.charAt(0))
//T

//.indexOf() tells the index of a character.
console.log(username.indexOf("o"))
//5

//.lastIndexOf() gives final index character.
console.log(username.lastIndexOf("e"))
//e appearance twice so the final/last time is at index 8.

//.length returns size of string.
console.log(username.length)
//10

//.trim() trailing removes whitespace.
console.log(username.trim())

//.repeat() repeats string.
console.log(username.repeat(3))

//.startWith() and .EndsWith() are booleans that check the coresponding answer.
console.log(username.startsWith("T"))
console.log(username.endsWith("v"))

//.includes() another boolean that checks if a character is included.
console.log(username.includes("e"))

//.replaceAll() replaces all characters with input.
console.log(username.replaceAll("e", "a"))
//username becomes Tachno Dav

//.padStart() and .padEnd() add extra characters to the beginning and end.
console.log(username.padStart(20, "*"))
console.log(username.padEnd(15, "*"))

//.slice() allows you to take a string and create a substring.

let firstName = username.slice(0, 6)
let lastName = username.slice(6)
console.log(firstName)
console.log(lastName)