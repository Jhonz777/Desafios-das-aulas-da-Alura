let nome = prompt('Olá, insira seu nome por favor:');
// Enquanto o nome for nulo ou vazio (ou só espaços), continua pedindo
while (nome === null || nome.trim() === '') {
  alert('Você não digitou um nome válido.');
  nome = prompt('Por favor, insira seu nome:');
}

alert(`Seja bem-vindo(a) ${nome}!`); 
console.log(`Usuário digitou: ${nome}!`);