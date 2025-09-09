const botaomostraPalavras = document.querySelector("#botao-palavrachave");

botaomostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavraChave() {
    const texto = document.querySelector("#entrada-de-texto").value;

    const campoResultado = document.querySelector("#resultado-palavrachave")

const palavra=texto.split(" ");

campoResultado.textContent=palavras;
