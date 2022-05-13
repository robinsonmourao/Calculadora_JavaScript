var numero;

/*renomerar uma variavel numero para cada funcao*/
function inserir(numeroInsertInput) {
    if(document.getElementById('resultado').innerHTML == "0"){
        limpar();
        numero = document.getElementById("resultado").innerHTML;
        document.getElementById('resultado').innerHTML = numero + numeroInsertInput;
    } else {
        numero = document.getElementById("resultado").innerHTML;
        document.getElementById('resultado').innerHTML = numero + numeroInsertInput;
    }
}
function voltar() {
    numero = document.getElementById("resultado").innerHTML;
    document.getElementById('resultado').innerHTML = numero.substring(0, numero.length - 1);
}
function limpar() {
    document.getElementById('resultado').innerHTML = '';
}
function calcular() {
    numero = document.getElementById('resultado').innerHTML;

    if (numero) {
        document.getElementById('resultado').innerHTML = eval(numero);
    }
}
/*
function raizQuadrada(numeroInsertInput) {
    if (numeroInsertInput) {
        document.getElementById("resultado").innerHTML = Math.sqrt(numeroInsertInput);
    }
}*/