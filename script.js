let tela = document.getElementById('tela');
let limpaTela = document.getElementById('limpaTela');
let salvarValor = document.getElementById('salvaValor');
let mostrarValorOuApagar = document.getElementById('mostrarValorOuApagar');
let ligou = document.getElementById('On');
let desligada = document.getElementById('Off');
let zeroInicial = document.getElementById('zeroInicial');
let botaoOn = document.getElementById('botaoOn');
let botaoComNumero = document.getElementsByClassName('botaoComNumero');
let botaoCalcula = document.getElementById('botaoCalcula');


let footer = document.getElementById('rodape');
anoAtual = new Date().getFullYear();
footer.innerText = `Copyright © ${anoAtual} - Bernardo Magueta Kowalsky`;


let botao1 = document.getElementById('botao1');
let botao2 = document.getElementById('botao2');
let botao3 = document.getElementById('botao3');
let botao4 = document.getElementById('botao4');
let botao5 = document.getElementById('botao5');
let botao6 = document.getElementById('botao6');
let botao7 = document.getElementById('botao7');
let botao8 = document.getElementById('botao8');
let botao9 = document.getElementById('botao9');
let botao0 = document.getElementById('botao0');

let soma = document.getElementById('soma');
let subtracao = document.getElementById('subtracao');
let divisao = document.getElementById('divisao');
let multiplicacao =  document.getElementById('multiplicacao');
let Pontovirgula = document.getElementById('virgula');

let temUmPonto = false;
let temValorNaTela = false;
let temValorPosVirgula = false;

let calculatorIsOn = false;
let mostrouValorGravado = 0;
localStorage.setItem("MostrouQuantasVezes", mostrouValorGravado);
localStorage.removeItem("Valor");

//Verifica se tem um valor gravado, caso tenha é true e caso não, é false.
let gravado = "";
let valorGravadoOuNao = localStorage.getItem("Valor");
if(valorGravadoOuNao == undefined){
    gravado = false;
} else {
    gravado = true;
}

let quantidadeNaTela = 0;
let tamanho;
let numerosTotais = 0;

//Quando clicar no ON/C a calculadora liga
function calculadoraOn(){
    tela.value= "";
    calculatorIsOn = true;
    ligou.style.display = "block";
    desligada.style.display = "none";
    zeroInicial.style.display = "block";
    quantidadeNaTela = 0;
    tamanho = 92;
    tela.style.fontSize = tamanho+"px";
    numerosTotais = 0;
    temUmPonto = false;
    temValorNaTela = false;
    temValorPosVirgula = false;

    botao1.removeAttribute("disabled");
    botao2.removeAttribute("disabled");
    botao3.removeAttribute("disabled");
    botao4.removeAttribute("disabled");
    botao5.removeAttribute("disabled");
    botao6.removeAttribute("disabled");
    botao7.removeAttribute("disabled");
    botao8.removeAttribute("disabled");
    botao9.removeAttribute("disabled");
    botao0.removeAttribute("disabled");

    soma.removeAttribute("disabled");
    subtracao.removeAttribute("disabled");
    divisao.removeAttribute("disabled");
    multiplicacao.removeAttribute("disabled");
    Pontovirgula.removeAttribute("disabled");

    botaoCalcula.setAttribute("disabled", "true");
}

//Se a calculadora estiver ligada, quando clicar no CE ele limpa a tela
function limparTela(){
    if(calculatorIsOn == true){
        tela.value= "";
        zeroInicial.style.display = "block";
        quantidadeNaTela = 0;
        tamanho = 92;
        tela.style.fontSize = tamanho+"px";
        numerosTotais = 0;
        temUmPonto = false;
        temValorNaTela = false;
        temValorPosVirgula = false;

        botao1.removeAttribute("disabled");
        botao2.removeAttribute("disabled");
        botao3.removeAttribute("disabled");
        botao4.removeAttribute("disabled");
        botao5.removeAttribute("disabled");
        botao6.removeAttribute("disabled");
        botao7.removeAttribute("disabled");
        botao8.removeAttribute("disabled");
        botao9.removeAttribute("disabled");
        botao0.removeAttribute("disabled");

        soma.removeAttribute("disabled");
        subtracao.removeAttribute("disabled");
        divisao.removeAttribute("disabled");
        multiplicacao.removeAttribute("disabled");
        Pontovirgula.removeAttribute("disabled");

        botaoCalcula.setAttribute("disabled", "true");
    }
}

//Se a calculadora estiver ligada, quando clicar no M+ ele grava o valor que está na tela
function gravaValor(){
    if(calculatorIsOn == true){
        temUmPonto = false;
        let valor = tela.value;
        if(valor == null || valor == undefined || valor == ""){
            console.log('Nenhum valor');
        }else {
            localStorage.setItem("Valor", valor);
            gravado = true;
            tela.value = "";
            zeroInicial.style.display = "block";
            numerosTotais = 0;
            temUmPonto = false;
            temValorNaTela = false;
            temValorPosVirgula = false;
        }

        botao1.removeAttribute("disabled");
        botao2.removeAttribute("disabled");
        botao3.removeAttribute("disabled");
        botao4.removeAttribute("disabled");
        botao5.removeAttribute("disabled");
        botao6.removeAttribute("disabled");
        botao7.removeAttribute("disabled");
        botao8.removeAttribute("disabled");
        botao9.removeAttribute("disabled");
        botao0.removeAttribute("disabled");

        soma.removeAttribute("disabled");
        subtracao.removeAttribute("disabled");
        divisao.removeAttribute("disabled");
        multiplicacao.removeAttribute("disabled");
        Pontovirgula.removeAttribute("disabled");
    }
}

//Se a calculadora estiver ligada, quando clicar no M- ele subtrai do que está guardado no M+
function subtraiValorGravado(){
    if(calculatorIsOn == true && gravado == true){
        temUmPonto = false;
        let valor = localStorage.getItem("Valor");
        let valorTela = tela.value;
        let total = parseInt(valor) - parseInt(valorTela);
        localStorage.setItem("Valor", total);
        tela.value = "";
        zeroInicial.style.display = "block";
        numerosTotais = 0;
        temValorNaTela = false;
        temValorPosVirgula = false;

        botao1.removeAttribute("disabled");
        botao2.removeAttribute("disabled");
        botao3.removeAttribute("disabled");
        botao4.removeAttribute("disabled");
        botao5.removeAttribute("disabled");
        botao6.removeAttribute("disabled");
        botao7.removeAttribute("disabled");
        botao8.removeAttribute("disabled");
        botao9.removeAttribute("disabled");
        botao0.removeAttribute("disabled");

        soma.removeAttribute("disabled");
        subtracao.removeAttribute("disabled");
        divisao.removeAttribute("disabled");
        multiplicacao.removeAttribute("disabled");
        Pontovirgula.removeAttribute("disabled");
    }
}

//Se a calculadora estiver ligada, ele passa por condições na qual se foi apertado uma vez o MRC ele mostra o valor e se for apertado novamente ele apaga o valor salvo
function mostraValorOuApaga(){
    let valorGravado = localStorage.getItem("MostrouQuantasVezes");

    if(JSON.parse(valorGravado) == 0 && calculatorIsOn == true && gravado == true){
        let valor = localStorage.getItem("Valor");
        tela.value = valor;
        mostrouValorGravado++;
        localStorage.setItem("MostrouQuantasVezes", mostrouValorGravado);
        zeroInicial.style.display = "none";
        numerosTotais = tela.value.length;
        temValorNaTela = true;

        if(largura < 720 && tela.value.length <= 6){
            tamanho = 50;
            tela.style.fontSize = tamanho+"px";
        } else if(largura < 720 && tela.value.length <= 12){
            tamanho = 30;
            tela.style.fontSize = tamanho+"px";
        } else if(largura > 720 && tela.value.length <= 6){
            tamanho = 92;
            tela.style.fontSize = tamanho+"px";
        } else if(quantidadeNaTela > 6 && tela.value.length <= 12){
            tamanho = 50;
            tela.style.fontSize = tamanho+"px";
        }


    } else if(JSON.parse(valorGravado) == 1 && calculatorIsOn == true && gravado == true){
        localStorage.removeItem("Valor");
        mostrouValorGravado = 0;
        localStorage.setItem("MostrouQuantasVezes", mostrouValorGravado);
        gravado = false;
        tela.value = "";
        zeroInicial.style.display = "block";
        temValorNaTela = false;
    } else {
        tela.value = "";
        zeroInicial.style.display = "block";
        numerosTotais = 0;
        temValorNaTela = false;
    }
}

//Põe o valor clicado na tela
function botao(valoTela){
    if(calculatorIsOn == true){
        tela.value += valoTela;
        zeroInicial.style.display = "none";
        numerosTotais++;
        temValorNaTela = true;
        
        if(temUmPonto == true){
            temValorPosVirgula = true;
        }
        
        var largura = window.innerWidth;
        
        if(numerosTotais == 12 || numerosTotais == 23){
            botao2.setAttribute("disabled", "true");
            botao1.setAttribute("disabled", "true");
            botao3.setAttribute("disabled", "true");
            botao4.setAttribute("disabled", "true");
            botao5.setAttribute("disabled", "true");
            botao6.setAttribute("disabled", "true");
            botao7.setAttribute("disabled", "true");
            botao8.setAttribute("disabled", "true");
            botao9.setAttribute("disabled", "true");
            botao0.setAttribute("disabled", "true");

            soma.setAttribute("disabled", "true");
            subtracao.setAttribute("disabled", "true");
            divisao.setAttribute("disabled", "true");
            multiplicacao.setAttribute("disabled", "true");
            Pontovirgula.setAttribute("disabled", "true");
        }

        if(largura < 720 && tela.value.length <= 6){
            tamanho = 50;
            tela.style.fontSize = tamanho+"px";
        } else if(largura < 720 && tela.value.length <= 12){
            tamanho = 30;
            tela.style.fontSize = tamanho+"px";
        } else if(largura > 720 && tela.value.length <= 6){
            tamanho = 92;
            tela.style.fontSize = tamanho+"px";
        } else if(quantidadeNaTela > 6 && tela.value.length <= 12){
            tamanho = 50;
            tela.style.fontSize = tamanho+"px";
        }
    }
}

//Adiciona a vírgula caso o usuário queira calculo com virgula
function virgula(){
    if(calculatorIsOn == true){
        temValorPosVirgula == false;
        if(temUmPonto == false && temValorNaTela == true) {
            tela.value += ".";
            temUmPonto = true;
            zeroInicial.style.display = "none";
            temValorPosVirgula = false;

            var largura = window.innerWidth;

            if(largura < 720 && quantidadeNaTela <= 6){
                tamanho = 50;
                tela.style.fontSize = tamanho+"px";
            } else if(largura < 720 && quantidadeNaTela <= 12){
                tamanho = 30;
                tela.style.fontSize = tamanho+"px";
            } else if(largura > 720 && quantidadeNaTela <= 6){
                tamanho = 92;
                tela.style.fontSize = tamanho+"px";
            } else if(largura > 720 && quantidadeNaTela <= 12){
                tamanho = 50;
                tela.style.fontSize = tamanho+"px";
            }

        } else if(temUmPonto == false && temValorNaTela == false){
            tela.value += "0.";
            temUmPonto = true;
            zeroInicial.style.display = "none";

            var largura = window.innerWidth;

            if(largura < 720 && quantidadeNaTela <= 6){
                tamanho = 50;
                tela.style.fontSize = tamanho+"px";
            } else if(largura < 720 && quantidadeNaTela <= 12){
                tamanho = 30;
                tela.style.fontSize = tamanho+"px";
            } else if(largura > 720 && quantidadeNaTela <= 6){
                tamanho = 92;
                tela.style.fontSize = tamanho+"px";
            } else if(largura > 720 && quantidadeNaTela <= 12){
                tamanho = 50;
                tela.style.fontSize = tamanho+"px";
            }

        }
    }
}


//Pega o que o usuário vai clicando de operação e add na tela
var valor;
var resultado;
function operacao(operation){
    if(calculatorIsOn == true && temValorPosVirgula == true || temUmPonto == true && temValorPosVirgula == true || temUmPonto == false){
        zeroInicial.style.display = "none";
        valor = tela.value += operation;
        quantidadeNaTela++;
        numerosTotais++;
        var largura = window.innerWidth;

        if(largura < 720 && quantidadeNaTela <= 6){
            tamanho = 50;
            tela.style.fontSize = tamanho+"px";
        } else if(largura < 720 && quantidadeNaTela <= 12){
            tamanho = 30;
            tela.style.fontSize = tamanho+"px";
        } else if(largura > 720 && quantidadeNaTela <= 6){
            tamanho = 92;
            tela.style.fontSize = tamanho+"px";
        } else if(quantidadeNaTela > 6 && quantidadeNaTela <= 12){
            tamanho = 50;
            tela.style.fontSize = tamanho+"px";
        }

        if(numerosTotais >= 2){
            botaoCalcula.removeAttribute("disabled");
        }
        
        temUmPonto = false;
        temValorNaTela = true;
        temValorPosVirgula = false;
    }
}

//Calcula o valor desejado
function calcular(){
    if(calculatorIsOn == true){
        zeroInicial.style.display = "none";
        resultado = eval(tela.value);
        tela.style.fontSize = tamanho+"px";
        tela.value = resultado;
        quantidadeNaTela = 0;
        temUmPonto = false;
        temValorNaTela = true;
        temValorPosVirgula = false;

        botao1.removeAttribute("disabled");
        botao2.removeAttribute("disabled");
        botao3.removeAttribute("disabled");
        botao4.removeAttribute("disabled");
        botao5.removeAttribute("disabled");
        botao6.removeAttribute("disabled");
        botao7.removeAttribute("disabled");
        botao8.removeAttribute("disabled");
        botao9.removeAttribute("disabled");
        botao0.removeAttribute("disabled");

        soma.removeAttribute("disabled");
        subtracao.removeAttribute("disabled");
        divisao.removeAttribute("disabled");
        multiplicacao.removeAttribute("disabled");
        Pontovirgula.removeAttribute("disabled");

        window.addEventListener('resize', function () {
            //var altura = window.innerHeight;
            var largura = window.innerWidth;
        
            if (largura < 420) {
                tamanho = 50
            } else {
                tamanho = 92
            }
        });
    }
}
