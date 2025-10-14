const botaomostraPalavras = document.querySelector('#botao-palavrachave');

botaomostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavraChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave')
    const palavraschave = processatexto(texto);
}

campoResultado.textContent = palavras.join(", ");

function preocessatexto(texto) {
    let palavras = texto.split(/\P[L]+/U);
    for(let i in palavras){
        palavras{i}=palavras(i).toLeweCase();
    }

    palavras=tirapalavrasruins(palavras);

const frequencia=contafrequencia (palavras) ;
let ordenadas=Object.keys(frequencia).sort(ordenpalavra);

console.log(ordenadas);
return ordenadas.slice(0, 10);
}
function contafrequencias(palavras){
    let  frequencias={;
        for (let  j of palavras){
            frequencias[i]=0;
            for (letj of palavras){
                if (i==j){
                    frequencia[i]++;
                }
            }
        }
    }
}
let frequencias = ();
for (let i of palavras) {
    frequencia{i} =0;
       for(let j of palavras) {
           if(i==j) (
               frequencia(i)++;
             }
         }
    }
     return frequencias;
)

function tirapalavrasruins(palavras) {
    const oalavras_ruins=new setInterval(["para", "uma", "nós"]);
    const palavrasboas={;
        for (let palavras of palavras) ()
}
