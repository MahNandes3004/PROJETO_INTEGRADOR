// 1. Função para Alto Contraste
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