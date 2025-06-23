let pontuacao = prompt("Digite sua pontuação:");

// Enquanto estiver vazio, só com espaços ou não for número
while (pontuacao === null || pontuacao.trim() === '' || isNaN(pontuacao)) {
  alert("Por favor, insira um número válido.");
  pontuacao = prompt("Digite sua pontuação:");
}

// Agora que sabemos que é válido, convertemos para número
pontuacao = Number(pontuacao);

if (pontuacao >= 100) {
  alert("Parabéns, você venceu!");
} else {
  alert("Tente novamente para ganhar.");
}