// Botão Plano Individual
document.getElementById('planoIndividual').addEventListener('click', function() {
  exibirPlanoSelecionado('Plano Individual')
});

// Botão Plano Dupla
document.getElementById('planoDupla').addEventListener('click', function() {
  exibirPlanoSelecionado('Plano Dupla')
});

// Botão Plano Família
document.getElementById('planoFamilia').addEventListener('click', function() {
  exibirPlanoSelecionado('Plano Família')
});

// Função para exibir o card do plano selecionado
function exibirPlanoSelecionado(plano) {
  document.getElementById('planoSelecionado').textContent = plano
  document.getElementById('cardPlano').style.display = 'block'
}

// Função Scroll para os Planos
function scrollPlanos() {
  const secPlanos = document.querySelector('.content-2')
  secPlanos.scrollIntoView({ behavior: 'smooth' })
}