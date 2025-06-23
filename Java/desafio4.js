console.log('Boas-vindas!');

let nome = 'Jhonyn';
console.log(`Olá, ${nome}!`);

let nome2 = 'Jhonyn';
alert(`Olá, ${nome2}!`);

let pergunta = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(`A linguagem de programação preferida é: ${pergunta}`);

let valor1 = 3;
let valor2 = 7;
let resultadoSoma = valor1 + valor2;
console.log(`A soma de ${valor1} + ${valor2} é igual a: ${resultadoSoma}`);

let resultadoSubtracao = Math.abs(valor1 - valor2);
console.log(`A diferença entre ${valor1} e ${valor2} é igual a: ${resultadoSubtracao}`);

let idade = parseInt(prompt('Qual é a sua idade?(apenas números)'));
if (idade >= 18) {
    console.log(`${nome} é maior de idade.`);
} else {
    console.log(`${nome} é menor de idade.`);
    }

let numero = parseFloat(prompt('Digite um número:'));
if (numero > 0) {
  console.log('O número é positivo.');
} else if (numero < 0) {
  console.log('O número é negativo.');
} else {
  console.log('O número é 0.');
}

let numeros1a10 = 1;
while (numeros1a10 <= 10) {
  console.log(`Número atual ${numeros1a10}`);
  numeros1a10++;
}

let nota = 5;
if (nota >= 7) {
  console.log('Aprovado');
} else {
  console.log('Reprovado');
}

let numeroAleatorio = Math.random();
console.log(`Número: ${numeroAleatorio}`);

let numeroAleatorio1a10 = parseInt(Math.random() * 10 + 1);
console.log(`Número: ${numeroAleatorio1a10}`);

let numeroAleatorio1a1000 = parseInt(Math.random() * 1000 + 1);
console.log(`Número: ${numeroAleatorio1a1000}`);



