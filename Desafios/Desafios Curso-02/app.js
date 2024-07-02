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

let olaMundo = () => console.log('Olá Mundo!!');

let nomePessoa = (nome) => console.log(`Olá ${nome}!`);

let numDobro = (numero) => console.log(numero * 2);

let media = (num1, num2, num3) => console.log((num1 + num2 + num3)/3);

let maior = (x, y) => console.log(x > y ? x : y);

let multEleMesmo = (num) => console.log(num ** 2);

let imc = (altura, peso) => alert(peso / (altura ** 2));

let conversaoDolar = (dolar) => alert(`R$${dolar * 4.80}`);

function areaPerimetro(altura, largura) {
    
    let area = altura * largura;

    let perimetro = 2 * (altura + largura);

    return alert(`A sala retangular tem como área: ${area} e perímetro: ${perimetro}.`);
}

function areaPerimetroCirculo(raio) {
    
    let pi = 3.14;

    let area = pi * (raio ** 2);

    let perimetro = 2 * pi * raio;

    return alert(`A sala circula tem como área: ${area} e perímetro: ${perimetro}.`);
}

let tabuada = () => {
    let numTab = parseInt(prompt('Digite um número')); 
    
    return alert(`2 X ${numTab}: ${numTab*2}\n3 X ${numTab}: ${numTab*3}\n4 X ${numTab}: ${numTab*4}\n5 X ${numTab}: ${numTab*5}\n6 X ${numTab}: ${numTab*6}\n7 X ${numTab}: ${numTab*7}\n8 X ${numTab}: ${numTab*8}\n9 X ${numTab}: ${numTab*9}\n`);
}