let tamanho = 22;

function aumentarFonte(){

tamanho += 2;

document.body.style.fontSize = tamanho + "px";

}// 1. Função para Alto Contraste
function alternarAltoContraste() {
    // A função 'toggle' liga a classe se ela não existir, e desliga se ela já existir
    document.body.classList.toggle('alto-contraste');
}

// 2. Função para Aumentar/Diminuir a Fonte Dinamicamente
let tamanhoAtual = 16; // Tamanho inicial em pixels

function mudarTamanhoFonte(mudanca) {
    tamanhoAtual = tamanhoAtual + mudanca;
    
    // Limites para a fonte não ficar gigante ou minúscula demais
    if (tamanhoAtual > 32) {
        tamanhoAtual = 32;
    } else if (tamanhoAtual < 12) {
        tamanhoAtual = 12;
    }

    // Aplica o novo tamanho ao corpo do site
    document.body.style.fontSize = tamanhoAtual + 'px';
}

function diminuirFonte(){

if(tamanho>16){

tamanho -=2;

document.body.style.fontSize = tamanho + "px";

}

}

function altoContraste(){

document.body.classList.toggle("alto-contraste");

}

const cartoes = document.querySelectorAll(".cartao");

cartoes.forEach(cartao=>{

cartao.addEventListener("click",()=>{

cartao.classList.toggle("virado");

});

});