function normalizar(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

const diasUteis = ['segunda', 'terça', 'quarta', 'quinta', 'sexta'];
const fimDeSemana = ['sabado', 'domingo'];

let dia = normalizar(prompt('Olá, hoje é qual dia da semana?'));
console.log('Dia:', dia);

if (diasUteis.includes(dia)) {
    alert('Boa semana!');
} else if (fimDeSemana.includes(dia)) {
    alert('Bom fim de semana!');
} else {
    alert('Dia inválido, tente novamente.');
}
