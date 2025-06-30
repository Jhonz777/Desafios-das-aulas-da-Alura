// Item 1
function calculoIMC(altura, peso) {
  let IMC = peso / (altura * altura);
  return IMC.toFixed(3);
}

// Item 2
function calculoFatorial(numero) {
    if (numero < 0) {
    return 'Não existe fatorial para números negativos.';
  } else if (numero === 0 || numero === 1) {
    return 1;
    } else {
      let fatorial = 1;
      let i = 2;

       while (i <= numero) {
        fatorial *= i;
        i++;
  }
  return fatorial;
}
}

// Item 3
function usdReais(usd) { 
  let valorConvertido =  usd * 4.8;
  return `R$ ${valorConvertido.toFixed(2)}`;
}

// Item 4
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function calculoAreaPerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    return {area, perimetro}
}
function exibirCalculo(area, perimetro) {
    exibirTextoNaTela('h1', `A área é de  ${area} m²`);
    exibirTextoNaTela('p', `O perímetro é de  ${perimetro}m`);
}

// Exemplo
const {area, perimetro} = calculoAreaPerimetro(altura, largura);
exibirCalculo(area, perimetro);

// Item 5
let pi = 3.14;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function calculoAreaPerimetroCirculo(raio, pi) {
    let areaCirculo = pi * (raio ** 2);
    let perimetroCirculo = 2 * pi * raio;
    return {areaCirculo, perimetroCirculo}
}
function exibirCalculoCirculo(areaCirculo, perimetroCirculo) {
    exibirTextoNaTela('h1', `A área é de  ${areaCirculo} m²`);
    exibirTextoNaTela('p', `O perímetro é de  ${perimetroCirculo}m`);
}

// Exemplo
const {areaCirculo, perimetroCirculo} = calculoAreaPerimetroCirculo(raio, pi);
exibirCalculoCirculo(areaCirculo, perimetroCirculo);

// Item 6
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function tabuada(numero) {
  let i = 1;
  let resultado = '';

  while (i <= 10) {
    resultado += `${numero} * ${i} = ${numero * i}\n`;
    i++;
  }
  document.querySelector('pre').innerText = resultado;
}