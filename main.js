/* ==========================================
   MENU
========================================== */

const hamburger =
    document.getElementById("hamburger");

const mobileMenu =
    document.getElementById("mobileMenu");


hamburger.addEventListener("click", () => {

    const open =
        mobileMenu.classList.toggle("open");

    hamburger.classList.toggle(
        "active",
        open
    );

    hamburger.setAttribute(
        "aria-expanded",
        open
    );

    hamburger.setAttribute(
        "aria-label",
        open
            ? "Fechar menu"
            : "Abrir menu"
    );

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

            hamburger.classList.remove("active");

            hamburger.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });



/* ==========================================
   DISCO DE NEWTON
========================================== */

const disk =
    document.getElementById("newtonDisk");

const startDisk =
    document.getElementById("startDisk");

const stopDisk =
    document.getElementById("stopDisk");

const speedRange =
    document.getElementById("speedRange");

const speedNumber =
    document.getElementById("speedNumber");

const diskText =
    document.getElementById("diskText");

const stateLight =
    document.getElementById("stateLight");


let diskRunning =
    false;

let diskRotation =
    0;

let diskSpeed =
    Number(speedRange.value);

let lastTime =
    0;


function rotateDisk(time) {

    if (!lastTime) {

        lastTime =
            time;

    }


    const delta =
        time - lastTime;


    lastTime =
        time;


    if (diskRunning) {

        diskRotation +=
            diskSpeed * delta * 0.12;


        disk.style.transform =
            `rotate(${diskRotation}deg)`;

    }


    requestAnimationFrame(
        rotateDisk
    );

}


requestAnimationFrame(
    rotateDisk
);


speedRange.addEventListener(
    "input",
    () => {

        diskSpeed =
            Number(speedRange.value);

        speedNumber.textContent =
            diskSpeed;

    }
);


startDisk.addEventListener(
    "click",
    () => {

        diskRunning =
            true;

        diskText.textContent =
            "Disco girando";

        stateLight.classList.add(
            "active"
        );

    }
);


stopDisk.addEventListener(
    "click",
    () => {

        diskRunning =
            false;

        diskText.textContent =
            "Disco parado";

        stateLight.classList.remove(
            "active"
        );

    }
);



/* ==========================================
   RGB
========================================== */

const red =
    document.getElementById("red");

const green =
    document.getElementById("green");

const blue =
    document.getElementById("blue");


const rValue =
    document.getElementById("rValue");

const gValue =
    document.getElementById("gValue");

const bValue =
    document.getElementById("bValue");


const rgbBulb =
    document.getElementById("rgbBulb");

const rgbGlow =
    document.getElementById("rgbGlow");

const rgbCode =
    document.getElementById("rgbCode");


const resetRGB =
    document.getElementById("resetRGB");


function updateRGB() {

    const r =
        Number(red.value);

    const g =
        Number(green.value);

    const b =
        Number(blue.value);


    const color =
        `rgb(${r}, ${g}, ${b})`;


    rValue.textContent = r;

    gValue.textContent = g;

    bValue.textContent = b;


    rgbBulb.style.background =
        color;


    rgbBulb.style.boxShadow =
        `0 0 55px ${color}`;


    rgbGlow.style.background =
        color;


    rgbCode.textContent =
        `RGB(${r}, ${g}, ${b})`;

}


red.addEventListener(
    "input",
    updateRGB
);

green.addEventListener(
    "input",
    updateRGB
);

blue.addEventListener(
    "input",
    updateRGB
);


resetRGB.addEventListener(
    "click",
    () => {

        red.value = 255;

        green.value = 70;

        blue.value = 70;

        updateRGB();

    }
);


updateRGB();



/* ==========================================
   FADE
========================================== */

const fadeLamp =
    document.getElementById("fadeLamp");

const startFade =
    document.getElementById("startFade");

const stopFade =
    document.getElementById("stopFade");


let fadeRunning =
    false;

let fadeValue =
    0.12;

let fadeDirection =
    1;


function fadeAnimation() {

    if (!fadeRunning) {

        return;

    }


    fadeValue +=
        0.007 * fadeDirection;


    if (fadeValue >= 1) {

        fadeValue =
            1;

        fadeDirection =
            -1;

    }


    if (fadeValue <= .08) {

        fadeValue =
            .08;

        fadeDirection =
            1;

    }


    fadeLamp.style.opacity =
        fadeValue;


    requestAnimationFrame(
        fadeAnimation
    );

}


startFade.addEventListener(
    "click",
    () => {

        if (!fadeRunning) {

            fadeRunning =
                true;

            fadeAnimation();

        }

    }
);


stopFade.addEventListener(
    "click",
    () => {

        fadeRunning =
            false;

    }
);



/* ==========================================
   FLASHCARDS
========================================== */

const flashcards =
    document.querySelectorAll(
        ".flashcard"
    );


flashcards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            card.classList.toggle(
                "flipped"
            );

        }
    );

    card.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                card.classList.toggle(
                    "flipped"
                );

            }

        }
    );

});



/* ==========================================
   FONTE
========================================== */

const fontMinus =
    document.getElementById("fontMinus");

const fontPlus =
    document.getElementById("fontPlus");

const fontNormal =
    document.getElementById("fontNormal");

const fontValue =
    document.getElementById("fontValue");


let fontScale =
    Number(
        localStorage.getItem("fontScale")
    ) || 1;


function updateFont() {

    fontScale =
        Math.max(
            .85,
            Math.min(
                1.4,
                fontScale
            )
        );


    document.documentElement.style.setProperty(
        "--font-scale",
        fontScale
    );


    fontValue.textContent =
        `${Math.round(fontScale * 100)}%`;


    localStorage.setItem(
        "fontScale",
        fontScale
    );

}


fontMinus.addEventListener(
    "click",
    () => {

        fontScale -= .1;

        updateFont();

    }
);


fontPlus.addEventListener(
    "click",
    () => {

        fontScale += .1;

        updateFont();

    }
);


fontNormal.addEventListener(
    "click",
    () => {

        fontScale =
            1;

        updateFont();

    }
);


updateFont();



/* ==========================================
   CONTRASTE
========================================== */

const contrastButton =
    document.getElementById(
        "contrastButton"
    );


let contrast =
    localStorage.getItem(
        "contrast"
    ) === "true";


function updateContrast() {

    document.body.classList.toggle(
        "high-contrast",
        contrast
    );


    contrastButton.classList.toggle(
        "active",
        contrast
    );


    contrastButton.textContent =
        contrast
            ? "Desativar"
            : "Ativar";


    contrastButton.setAttribute(
        "aria-pressed",
        contrast
    );


    localStorage.setItem(
        "contrast",
        contrast
    );

}


contrastButton.addEventListener(
    "click",
    () => {

        contrast =
            !contrast;

        updateContrast();

    }
);


updateContrast();



/* ==========================================
   LEITURA
========================================== */

const heroRead =
    document.getElementById(
        "heroRead"
    );


const stopSpeech =
    document.getElementById(
        "stopSpeech"
    );


function readPage() {

    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "Seu navegador não suporta leitura em voz alta."
        );

        return;

    }


    speechSynthesis.cancel();


    const text = `

        Bem-vindo ao NewtonLab.

        Este é um projeto educativo
        sobre o Disco de Newton,
        LED RGB e Fade In e Fade Out.

        Você pode experimentar
        um Disco de Newton giratório,
        criar cores usando um LED RGB,
        testar o efeito Fade In e Fade Out
        e revisar os conteúdos
        utilizando os flashcards.

    `;


    const speech =
        new SpeechSynthesisUtterance(
            text
        );


    speech.lang =
        "pt-BR";

    speech.rate =
        .9;


    speechSynthesis.speak(
        speech
    );

}


heroRead.addEventListener(
    "click",
    readPage
);


stopSpeech.addEventListener(
    "click",
    () => {

        if (
            "speechSynthesis" in window
        ) {

            speechSynthesis.cancel();

        }

    }
);