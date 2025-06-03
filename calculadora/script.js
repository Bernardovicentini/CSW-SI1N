function calcular() {
    var valor1 = Number(document.getElementById("n1").value);
    var valor2 = Number(document.getElementById("n2").value);
    var operador = (document.getElementById("operacao").value);
    var resultado = 0

    switch (operador) {
        case '+': resultado = valor1 + valor2; break;
        case '-': resultado =  valor1 - valor2; break;
        case '*': resultado =  valor1 * valor2; break;
        case '/': resultado =  valor1 / valor2; break;
        default: alert("Operador invalido");
    }

    var result = document.getElementById("resultadocalculo");
    result.innerHTML = resultado
}