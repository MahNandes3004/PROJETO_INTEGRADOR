// ========================================
// MENU HAMBÚRGUER
// ========================================

const botaoMenu = document.getElementById("botaoMenu");
const menu = document.getElementById("menu");


botaoMenu.addEventListener("click", function () {

    const menuAberto =
        menu.classList.toggle("aberto");


    botaoMenu.classList.toggle(
        "ativo",
        menuAberto
    );


    botaoMenu.setAttribute(
        "aria-expanded",
        menuAberto
    );


    botaoMenu.setAttribute(
        "aria-label",
        menuAberto
            ? "Fechar menu"
            : "Abrir menu"
    );

});


// Fechar menu ao clicar em um link

const linksMenu =
    document.querySelectorAll(".menu a");


linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("aberto");

        botaoMenu.classList.remove("ativo");

        botaoMenu.setAttribute(
            "aria-expanded",
            "false"
        );

        botaoMenu.setAttribute(
            "aria-label",
            "Abrir menu"
        );

    });

});


// ========================================
// AUMENTAR E DIMINUIR FONTE
// ========================================

const aumentarFonte =
    document.getElementById("aumentarFonte");

const diminuirFonte =
    document.getElementById("diminuirFonte");

const fonteNormal =
    document.getElementById("fonteNormal");

const porcentagemFonte =
    document.getElementById("porcentagemFonte");


let tamanhoFonte = 1;


// Atualizar tamanho

function atualizarFonte() {

    // Limites

    if (tamanhoFonte > 1.4) {

        tamanhoFonte = 1.4;

    }


    if (tamanhoFonte < 0.8) {

        tamanhoFonte = 0.8;

    }


    document.documentElement.style.setProperty(
        "--tamanho-fonte",
        tamanhoFonte
    );


    porcentagemFonte.textContent =
        Math.round(tamanhoFonte * 100) + "%";


    // Salvar preferência

    localStorage.setItem(
        "tamanhoFonte",
        tamanhoFonte
    );

}


// Aumentar

aumentarFonte.addEventListener(
    "click",
    function () {

        tamanhoFonte += 0.1;

        atualizarFonte();

    }
);


// Diminuir

diminuirFonte.addEventListener(
    "click",
    function () {

        tamanhoFonte -= 0.1;

        atualizarFonte();

    }
);


// Voltar ao normal

fonteNormal.addEventListener(
    "click",
    function () {

        tamanhoFonte = 1;

        atualizarFonte();

    }
);


// Carregar configuração salva

const fonteSalva =
    localStorage.getItem("tamanhoFonte");


if (fonteSalva !== null) {

    tamanhoFonte =
        Number(fonteSalva);

    atualizarFonte();

}


// ========================================
// ALTO CONTRASTE
// ========================================

const altoContraste =
    document.getElementById("altoContraste");


function atualizarContraste(ativado) {

    document.body.classList.toggle(
        "alto-contraste",
        ativado
    );


    altoContraste.setAttribute(
        "aria-pressed",
        ativado
    );


    altoContraste.textContent =
        ativado
            ? "Desativar"
            : "Ativar";


    localStorage.setItem(
        "altoContraste",
        ativado
    );

}


// Verificar configuração salva

const contrasteSalvo =
    localStorage.getItem(
        "altoContraste"
    ) === "true";


atualizarContraste(
    contrasteSalvo
);


// Botão de contraste

altoContraste.addEventListener(
    "click",
    function () {

        const ativado =
            !document.body.classList.contains(
                "alto-contraste"
            );

        atualizarContraste(
            ativado
        );

    }
);


// ========================================
// LEITURA EM VOZ ALTA
// ========================================

const botaoLeitura =
    document.getElementById(
        "botaoLeitura"
    );


const pararLeitura =
    document.getElementById(
        "pararLeitura"
    );


// Função para ler

function lerIntroducao() {

    // Verificar suporte

    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "Seu navegador não possui suporte para leitura em voz alta."
        );

        return;

    }


    // Parar leitura anterior

    window.speechSynthesis.cancel();


    const texto = `
        Bem-vindo ao NewtonLab.

        Este é um projeto educativo sobre
        o Disco de Newton, LED RGB,
        Fade In e Fade Out.

        O objetivo deste projeto é ensinar
        conceitos de Física e Eletrônica
        de maneira visual e interativa.

        Nas próximas etapas,
        teremos um Disco de Newton giratório,
        uma simulação de LED RGB,
        o efeito Fade In e Fade Out
        e flashcards educativos.
    `;


    const mensagem =
        new SpeechSynthesisUtterance(
            texto
        );


    mensagem.lang =
        "pt-BR";


    mensagem.rate =
        0.9;


    mensagem.pitch =
        1;


    window.speechSynthesis.speak(
        mensagem
    );

}


// Botão ouvir

botaoLeitura.addEventListener(
    "click",
    lerIntroducao
);


// Botão parar

pararLeitura.addEventListener(
    "click",
    function () {

        if (
            "speechSynthesis" in window
        ) {

            window.speechSynthesis.cancel();

        }

    }
);