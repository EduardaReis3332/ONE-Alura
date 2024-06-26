let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarClique() {
    console.log('O botão foi clicado');
}

function exibeAlerta() {
    alert('Eu amo JS!!');
}

function alertaCidade() {
    let cidade = prompt('Digite o nome de uma cidade brasileira');

    alert(`Estive em ${cidade} e lembrei de você`);
}

function numSoma() {
    let num01 = parseInt(prompt('Digite o primeiro número'));
    let num02 = parseInt(prompt('Digite o segundo número'));
    let soma = num01 + num02;

    alert(`A soma dos números é ${soma}`);
}