alert('Boas vindas ao nosso site!');
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert('Erro! Preencha todos os campos');
let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

nome = prompt('Qual é seu nome?');
idade = Number(prompt('Digite a sua idade'));
if (idade >= 18) { 
    alert('Pode tirar a habilitação!');
} else { 
    alert('Você é menor de idade e não pode tirar habilitação!');
}