let num = 0

document.getElementById("incriment").onclick = function () {
    num++;
    document.getElementById("number").textContent = num;    
}

document.getElementById("decriment").onclick = function () {
    num--;
    document.getElementById("number").textContent = num;    
}

document.getElementById("reset").onclick = function () {
    num = 0;
    document.getElementById("number").textContent = num;    
}