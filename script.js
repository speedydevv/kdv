function sub(){
var fiy = document.getElementById("fiy").value;
var kdv = document.getElementById("kdv").value;
var son = Math.round(fiy/(0.01*kdv+1));
document.getElementById("son").innerHTML = "Sonuç (Yuvarlanmış): "+son;
}