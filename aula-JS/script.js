

var cars = [" corola"," uno"," brasilia"," sandeiro"," ka"," gol"];
var text = "";



var i = 0;
while ( i < cars.length) {
    text += "carro = " + i + cars[i] + "<br>";
    i++;
}
document.getElementById("carro").innerHTML = text;

alert(text)