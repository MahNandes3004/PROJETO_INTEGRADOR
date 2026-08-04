// ======================================
// TAMANHO DA FONTE
// ======================================

let tamanhoFonte = 22;

function mudarFonte(valor){

    tamanhoFonte += valor;

    if(tamanhoFonte < 16){
        tamanhoFonte = 16;
    }

    if(tamanhoFonte > 36){
        tamanhoFonte = 36;
    }

    document.body.style.fontSize = tamanhoFonte + "px";

}


// ======================================
// ZOOM DA IMAGEM
// ======================================

let escalaImagem = 1;

function zoomImagem(fator){

    escalaImagem *= fator;

    if(escalaImagem < 0.6){
        escalaImagem = 0.6;
    }

    if(escalaImagem > 2.5){
        escalaImagem = 2.5;
    }

    const imagem = document.getElementById("imagemNewton");

    imagem.style.transform = `scale(${escalaImagem})`;

}


// ======================================
// ALTO CONTRASTE
// ======================================

function alternarContraste(){

    document.body.classList.toggle("alto-contraste");

}


// ======================================
// MODOS DE LEITURA
// ======================================

let temaAtual = 0;

function trocarTema(){

    document.body.classList.remove("tema1");
    document.body.classList.remove("tema2");
    document.body.classList.remove("tema3");

    temaAtual++;

    if(temaAtual > 3){
        temaAtual = 0;
    }

    switch(temaAtual){

        case 1:
            document.body.classList.add("tema1");
        break;

        case 2:
            document.body.classList.add("tema2");
        break;

        case 3:
            document.body.classList.add("tema3");
        break;

    }

}


// ======================================
// FLASHCARDS
// ======================================

const cartoes = document.querySelectorAll(".cartao");

cartoes.forEach(function(cartao){

    cartao.addEventListener("click", function(){

        cartao.classList.toggle("virado");

    });

});


// ======================================
// DUPLO CLIQUE NA IMAGEM = VOLTA AO TAMANHO ORIGINAL
// ======================================

const imagem = document.getElementById("imagemNewton");

imagem.addEventListener("dblclick", function(){

    escalaImagem = 1;

    imagem.style.transform = "scale(1)";

});


// ======================================
// EFEITO AO PASSAR O MOUSE
// ======================================

imagem.addEventListener("mouseenter", function(){

    imagem.style.cursor = "zoom-in";

});


// ======================================
// MENSAGEM NO CONSOLE
// ======================================

console.log("Óptica Acessível carregado com sucesso!");