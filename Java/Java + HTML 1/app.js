let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoConsole() {
    console.log ('O botão foi clicado');

}

function botaoAlerta() {
    console.log ('Eu amo JS');

}

function botaoPromptCidade() {
    let cidade = prompt("Digite o nome de uma cidade do Brasil:");

    // Expressão regular que permite apenas letras e espaços
     let apenasTexto = /^[A-Za-zÀ-ú\s]+$/;

    // Verifica se a cidade é válida pela função .test()
    if (cidade && apenasTexto.test(cidade)) {
        alert (`Estive em ${cidade} e lembrei de você.`); 
    } else {
        alert("Por favor, digite somente letras! Sem números ou símbolos.");
  }
}


function botaoSoma() {
    let numero1 = parseInt(prompt("Digite o primeiro número:"));
    let numero2 = parseInt(prompt("Digite o segundo número:"));

    // Verifica se os números são válidos, NaN são não números
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, digite números inteiros válidos.");
      }  else {
        alert(`O resultado da soma é ${numero1 + numero2}.`);
      }
    }

