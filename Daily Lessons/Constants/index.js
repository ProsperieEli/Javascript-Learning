//const variables are variables that can not be changed once declared.

const pi = 3.14159
let radius;
let circumferance;

document.getElementById("myBtn").onclick = function () { 
    radius = document.getElementById("myInput").value;
    radius = Number(radius);
    circumferance = 2 * pi * radius;
    document.getElementById("answer").textContent = circumferance;
}
