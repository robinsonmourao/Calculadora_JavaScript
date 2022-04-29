function inserir(numeroInsertInput){
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById('resultado').innerHTML = numero + numeroInsertInput;
}
function voltar(){
    var numeroVoltar = document.getElementById("resultado").innerHTML;
    document.getElementById('resultado').innerHTML = numeroVoltar.substring(0, numeroVoltar.length -1);
}
function limpar(){
    document.getElementsById('resultado').innerHTML = "";
}
function calcular(){
    var resultadoCalcular = document.getElementsById('resultado').innerHTML;

    if(resultadoCalcular){
        document.getElementsById('resultado').innerHTML = eval(resultadoCalcular);
    } else {
        document.getElementsById('resultado').innerHTML = "vazio";
    }
}