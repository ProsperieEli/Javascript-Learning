let name;

document.getElementById("myBtn").onclick = function() {
    name = document.getElementById("userInput").value;
    document.getElementById("myName").textContent = `Hi! My name is ${name}.`    
}

let windowName;

windowName = window.prompt("Another way to enter user input is with a prompt!")
console.log(windowName)
