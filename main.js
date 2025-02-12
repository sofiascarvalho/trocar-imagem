"use strict";

const botaoTrocarImagem = document.getElementById('trocar-imagem');

const imagens = [
    'url("B9726803337Z.1_20210421145140_000+GEVHUSUSU.1-0.jpg")',
    'url("GettyImages-176560285-1.webp")',
    'url("Gilmore-Girls-Modo_Meu.jpg")',
    'url("julie-and-the-phantoms-segunda-temporada.jpg")'
];

let indiceAtual = 0;

function trocarImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    document.documentElement.style.setProperty('--fundo-imagem', imagens[indiceAtual]);
}

botaoTrocarImagem.addEventListener('click', trocarImagem);
