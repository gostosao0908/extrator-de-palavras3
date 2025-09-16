const botaomostraPalavras = document.querySelector("#botao-palavrachave");

botaomostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavraChave() {
    const texto = document.querySelector("#entrada-de-texto").value;

    const campoResultado = document.querySelector("#resultado-palavrachave")

const palavraschave = processatexto(texto);


campoResultado.textContent=palavras;.join(",");

function preocessatexto(texto) {
      let palavras = texto.split(/\P[L]+/U);
      return palavras;
      }