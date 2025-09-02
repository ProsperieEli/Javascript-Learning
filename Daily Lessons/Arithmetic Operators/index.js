//When using JS, we can use two ways to illistrate operations. We can use assignment and shorthand.

let addition = 50;
//addition = addition + 1 OR addition += 1 == 51
 //addition = addition - 1 OR addition -= 1 == 49
//addition = addition * 5 OR addition *= 5 == 250
//addition = addition / 25 OR addition /= 25 == 2
//addition = addition % 10 OR addition %= 10 == 0
//addition = addition ** 2 OR addition **= 2 == 2500


document.getElementById("precedence").textContent =
    "When dealing with mathmatic problems in JS. The order of operations goes as follows:\
    1. parenthesis\
    2. exponents\
    3. multiplication/division/modulo\
    4. addition and subtraction."
