var numero;

function inserir(numeroInsertInput) {
    numero = document.getElementById("resultado").innerHTML;
    document.getElementById('resultado').innerHTML = numero + numeroInsertInput;
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
    } else {
        document.getElementById('resultado').innerHTML = "0";
    }
}
function raizQuadrada(numeroInsertInput) {
    if (numeroInsertInput) {
        document.getElementById("resultado").innerHTML = Math.sqrt(numeroInsertInput);
    } else {
        document.getElementById('resultado').innerHTML = "0";
    }

}