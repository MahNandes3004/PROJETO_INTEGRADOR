let tamanho = 20;

function aumentarFonte(){

tamanho+=2;

document.body.style.fontSize=tamanho+"px";

}

function diminuirFonte(){

tamanho-=2;

document.body.style.fontSize=tamanho+"px";

}

function contraste(){

document.body.classList.toggle("altoContraste");

}

function lerTexto(){

let texto=document.getElementById("conteudo").innerText;

let fala=new SpeechSynthesisUtterance(texto);

fala.lang="pt-BR";

speechSynthesis.speak(fala);

}

function girarDisco(){

document.getElementById("disco").classList.toggle("girar");

}
