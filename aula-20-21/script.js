function identificaridade(){

    var idade = document.getElementById("idade").value;
    idade = parseInt(idade)

    var identificar = "";

    if (idade < 0) {document.getElementById("identificacao").innerHTML
    = "Erro";}

    else if (idade = 0) {identificar ="Reçem Nascido";}

    else if (idade >= 1 && idade <= 10) document.getElementById("identificacao").innerHTML
    = "É uma criança";}

    else if (idade >=11 && idade <=16) {identificar = "É um adolescente";}

    else {identificar =" Errado!";}
    
    alert(identificacao);

}

