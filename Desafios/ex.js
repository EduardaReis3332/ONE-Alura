alert('Boas vindas ao nosso Site!!')

let nome = 'Lua'
let idade = 18

let numeroDeVendas = 50

let saldoDisponivel = 1000

let mensagemErro = 'Erro! Preencha todos os campos.'

nome = prompt('Digite seu nome: ')

idade = prompt('Digite sua idade: ')

if (idade >= 18) {
    alert('Pode tirar a habilitação!')
}else{
    alert('Não pode tirar a habilitação!')
}