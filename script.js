function sub(){
var fiy = document.getElementById("fiy").value;
var kdv = document.getElementById("kdv").value;
var son = fiy/(0.01*kdv+1);
document.getElementById("son").innerHTML = son;
}

