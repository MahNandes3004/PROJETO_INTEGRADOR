/* =====================================================
   MENU HAMBÚRGUER
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


menuButton.addEventListener("click", () => {

    const isOpen =
        mobileMenu.classList.toggle("open");


    menuButton.classList.toggle(
        "active",
        isOpen
    );


    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );


    menuButton.setAttribute(
        "aria-label",
        isOpen
            ? "Fechar menu"
            : "Abrir menu"
    );

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

            menuButton.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });



/* =====================================================
   DISCO DE NEWTON
===================================================== */

const newtonDisk =
    document.getElementById("newtonDisk");

const startDisk =
    document.getElementById("startDisk");

const stopDisk =
    document.getElementById("stopDisk");

const diskSpeed =
    document.getElementById("diskSpeed");

const speedValue =
    document.getElementById("speedValue");

const diskStatus =
    document.getElementById("diskStatus");

const statusDot =
    document.querySelector(".status-dot");


let rotating =
    false;

let rotation =
    0;

let lastTime =
    0;


/*
    Velocidade inicial
*/

let speed =
    Number(diskSpeed.value);


/*
    Atualiza o texto
*/

function updateSpeed() {

    speed =
        Number(diskSpeed.value);

    speedValue.textContent =
        speed;

}


diskSpeed.addEventListener(
    "input",
    updateSpeed
);


updateSpeed();


/*
    Animação do disco
*/

function animateDisk(time) {

    if (!lastTime) {

        lastTime =
            time;

    }


    const delta =
        time - lastTime;


    lastTime =
        time;


    if (rotating) {

        rotation +=
            speed * delta * 0.15;


        newtonDisk.style.transform =
            `rotate(${rotation}deg)`;

    }


    requestAnimationFrame(
        animateDisk
    );

}


requestAnimationFrame(
    animateDisk
);


/*
    Iniciar
*/

startDisk.addEventListener(
    "click",
    () => {

        rotating =
            true;

        diskStatus.textContent =
            "Disco girando";

        statusDot.classList.add(
            "running"
        );

    }
);


/*
    Parar
*/

stopDisk.addEventListener(
    "click",
    () => {

        rotating =
            false;

        diskStatus.textContent =
            "Disco parado";

        statusDot.classList.remove(
            "running"
        );

    }
);



/* =====================================================
   LED RGB
===================================================== */

const redSlider =
    document.getElementById("redSlider");

const greenSlider =
    document.getElementById("greenSlider");

const blueSlider =
    document.getElementById("blueSlider");


const redValue =
    document.getElementById("redValue");

const greenValue =
    document.getElementById("greenValue");

const blueValue =
    document.getElementById("blueValue");


const rgbLight =
    document.getElementById("rgbLight");


const ledBulb =
    document.querySelector(".led-bulb");


const rgbValue =
    document.getElementById("rgbValue");


const resetRGB =
    document.getElementById("resetRGB");


function updateRGB() {

    const red =
        Number(redSlider.value);

    const green =
        Number(greenSlider.value);

    const blue =
        Number(blueSlider.value);


    const color =
        `rgb(${red}, ${green}, ${blue})`;


    redValue.textContent =
        red;

    greenValue.textContent =
        green;

    blueValue.textContent =
        blue;


    rgbLight.style.background =
        color;


    ledBulb.style.background =
        color;


    ledBulb.style.boxShadow =
        `0 0 35px ${color},
         inset 0 -20px 35px rgba(0,0,0,.15)`;


    rgbValue.textContent =
        `RGB(${red}, ${green}, ${blue})`;

}


redSlider.addEventListener(
    "input",
    updateRGB
);


greenSlider.addEventListener(
    "input",
    updateRGB
);


blueSlider.addEventListener(
    "input",
    updateRGB
);


resetRGB.addEventListener(
    "click",
    () => {

        redSlider.value =
            255;

        greenSlider.value =
            80;

        blueSlider.value =
            80;


        updateRGB();

    }
);


updateRGB();



/* =====================================================
   FADE IN / FADE OUT
===================================================== */

const fadeLight =
    document.getElementById("fadeLight");

const startFade =
    document.getElementById("startFade");

const stopFade =
    document.getElementById("stopFade");


let fadeAnimation = null;

let fadeValue =
    0.1;

let fadeDirection =
    1;


function animateFade() {

    fadeValue +=
        0.008 * fadeDirection;


    if (fadeValue >= 1) {

        fadeValue =
            1;

        fadeDirection =
            -1;

    }


    if (fadeValue <= 0.08) {

        fadeValue =
            0.08;

        fadeDirection =
            1;

    }


    fadeLight.style.opacity =
        fadeValue;


    fadeAnimation =
        requestAnimationFrame(
            animateFade
        );

}


startFade.addEventListener(
    "click",
    () => {

        if (!fadeAnimation) {

            fadeAnimation =
                requestAnimationFrame(
                    animateFade
                );

        }

    }
);


stopFade.addEventListener(
    "click",
    () => {

        if (fadeAnimation) {

            cancelAnimationFrame(
                fadeAnimation
            );

            fadeAnimation =
                null;

        }

    }
);



/* =====================================================
   FLASHCARDS
===================================================== */

const flashcards =
    document.querySelectorAll(
        ".flashcard"
    );


flashcards.forEach(card => {


    function flipCard() {

        card.classList.toggle(
            "flipped"
        );

    }


    card.addEventListener(
        "click",
        flipCard
    );


    card.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                flipCard();

            }

        }
    );

});



/* =====================================================
   ACESSIBILIDADE — FONTE
===================================================== */

const fontMinus =
    document.getElementById("fontMinus");

const fontPlus =
    document.getElementById("fontPlus");

const fontReset =
    document.getElementById("fontReset");

const fontPercent =
    document.getElementById("fontPercent");


let fontScale =
    Number(
        localStorage.getItem(
            "fontScale"
        )
    ) || 1;


function updateFont() {

    fontScale =
        Math.min(
            1.4,
            Math.max(
                .85,
                fontScale
            )
        );


    document.documentElement.style.setProperty(
        "--font-scale",
        fontScale
    );


    fontPercent.textContent =
        `${Math.round(fontScale * 100)}%`;


    localStorage.setItem(
        "fontScale",
        fontScale
    );

}


fontMinus.addEventListener(
    "click",
    () => {

        fontScale -=
            .1;

        updateFont();

    }
);


fontPlus.addEventListener(
    "click",
    () => {

        fontScale +=
            .1;

        updateFont();

    }
);


fontReset.addEventListener(
    "click",
    () => {

        fontScale =
            1;

        updateFont();

    }
);


updateFont();



/* =====================================================
   ACESSIBILIDADE — ALTO CONTRASTE
===================================================== */

const contrastButton =
    document.getElementById(
        "contrastButton"
    );


let highContrast =
    localStorage.getItem(
        "highContrast"
    ) === "true";


function updateContrast() {

    document.body.classList.toggle(
        "high-contrast",
        highContrast
    );


    contrastButton.textContent =
        highContrast
            ? "Desativar"
            : "Ativar";


    contrastButton.classList.toggle(
        "active",
        highContrast
    );


    contrastButton.setAttribute(
        "aria-pressed",
        highContrast
    );


    localStorage.setItem(
        "highContrast",
        highContrast
    );

}


contrastButton.addEventListener(
    "click",
    () => {

        highContrast =
            !highContrast;

        updateContrast();

    }
);


updateContrast();



/* =====================================================
   LEITURA EM VOZ ALTA
===================================================== */

const readHero =
    document.getElementById(
        "readHero"
    );


const stopSpeech =
    document.getElementById(
        "stopSpeech"
    );


function speakIntroduction() {

    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "Seu navegador não possui suporte para leitura em voz alta."
        );

        return;

    }


    speechSynthesis.cancel();


    const text = `

        Bem-vindo ao NewtonLab.

        Este é um projeto educativo
        sobre o Disco de Newton,
        o LED RGB e os efeitos
        Fade In e Fade Out.

        No Disco de Newton,
        você pode experimentar a rotação
        de um disco dividido em sete cores.

        No experimento do LED RGB,
        você pode misturar vermelho,
        verde e azul.

        Nos flashcards,
        você pode revisar os conceitos
        estudados.

        O site também possui recursos
        de acessibilidade,
        como aumento de fonte,
        alto contraste
        e leitura em voz alta.

    `;


    const speech =
        new SpeechSynthesisUtterance(
            text
        );


    speech.lang =
        "pt-BR";

    speech.rate =
        .9;

    speech.pitch =
        1;


    speechSynthesis.speak(
        speech
    );

}


readHero.addEventListener(
    "click",
    speakIntroduction
);


stopSpeech.addEventListener(
    "click",
    () => {

        if (
            "speechSynthesis"
            in window
        ) {

            speechSynthesis.cancel();

        }

    }
);



/* =====================================================
   ROLAGEM SUAVE PARA NAVEGAÇÃO
===================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const target =
                    document.querySelector(
                        link.getAttribute("href")
                    );


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });