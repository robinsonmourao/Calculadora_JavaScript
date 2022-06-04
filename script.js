var numero;

//----------------FUNÇOES DE FATORAÇÃO----------------------
function pegarElemento(elemento){
    return document.getElementById(elemento).innerHTML;
}
function setarElemento(numero1){
    document.getElementById('resultado').innerHTML = numero1;
}

//--------------FUNÇÕES ESSENCIAIS--------------------------
function inserir(numeroInput) {

    if(pegarElemento('resultado') == "0"){
        limpar();
        numero = pegarElemento('resultado') ;
        setarElemento(numero + numeroInput);

    } else {
        numero = pegarElemento('resultado') ;
        setarElemento(numero + numeroInput);
    }
}
function voltar() {
    numero = pegarElemento('resultado');
    setarElemento(numero.substring(0, numero.length - 1));
}
function limpar() {
    setarElemento("");
}
function calcular() {
    numero = pegarElemento('resultado');

    if (numero) {
        setarElemento(eval(numero));
    }
}
/*
function raizQuadrada(numeroInsertInput) {
    if (numeroInsertInput) {
        document.getElementById("resultado").innerHTML = Math.sqrt(numeroInsertInput);
    }
}*/

document.addEventListener("keydown", keyPush);
//-----------------FUNÇÕES DE EVENTO DE TECLAS----------------

function keyPush(event){
    switch(event.keyCode){

        case(48):
        case(96):
            inserir('0');
            break;
        case(49):
        case(97):
            inserir('1');
            break;
        case(50):
        case(98):
            inserir('2');
            break;
        case(51):
        case(99):
            inserir('3');
            break;
        case(52):
        case(100):
            inserir('4');
            break;
        case(53):
        case(101):
            inserir('5');
            break;
        case(54):
        case(102):
            inserir('6');
            break;
        case(55):
        case(103):
            inserir('7');
            break;
        case(56):
        case(104):
            inserir('8');
            break;
        case(57):
        case(105):
            inserir('9');
            break;

        case(106):
            inserir('*');
            break;
        case(107):
        case(187):
            inserir('+');
            break;
        case(109):
        case(189):
            inserir('-');
            break;        
        case(111):
        case(191):
            inserir('/');
            break;

        case(110):
        case(188):
        case(190):
            inserir(',');
            break;

        case(46):
            limpar();
        case(8):
            voltar();//MELHOR FAZER COM INPUT NO HTML PQ PODE CLICAR ONDE SE QUER ALTERAR
            break;
        case(13):
        case(187):
            calcular();
            break;        
        default:
            break;

    }
}