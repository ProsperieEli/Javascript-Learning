let min;
let max;
let random;
let wholeNumber;

document.getElementById("roll").onclick = function () {
    min = document.getElementById("minInput").value
    max = document.getElementById("maxInput").value

    min = Number(min)
    max = Number(max);
    random = Math.random() * (max-min) + min
  

    wholeNumber = Math.round(random)

    
    document.getElementById("output").textContent = wholeNumber
}