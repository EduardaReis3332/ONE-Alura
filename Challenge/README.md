# Decodificador

## [Link da Página do Decodificar](https://eduardareis3332.github.io/ONE-Alura/Challenge/index.html)

## Introdução

Este projeto é um simples decodificador de texto que pode criptografar e descriptografar mensagens. Utilizamos HTML, CSS e JavaScript com ajuda dos cursos da ALURA para criar a interface e implementar as funcionalidades. Vou explicar como cada parte do código funciona e compartilhar algumas das dificuldades que encontrei durante o desenvolvimento.

## Estrutura do Projeto

1. **HTML**: Estrutura a página e define os elementos da interface.
2. **CSS**: Estiliza a página e garante que ela seja responsiva.
3. **JavaScript**: Adiciona a lógica de criptografia e descriptografia e manipula a interface.

## HTML

O HTML define a estrutura da página. Veja o trecho principal:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Decodificador</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="left-panel">
            <!-- Interface para digitar o texto -->
            <textarea placeholder="Digite seu texto"></textarea>
            <button class="btn-crypto">Criptografar</button>
            <button class="btn-decrypto">Descriptografar</button>
        </div>
        <div class="right-panel">
            <p class="result">Nenhuma mensagem encontrada</p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### Dificuldades Enfrentadas

- **Gerenciamento dos IDs e Classes**: Inicialmente, encontrei dificuldades para garantir que os IDs e classes no HTML fossem referenciados corretamente no CSS e JavaScript.

## CSS

O CSS é responsável pela aparência da página e pela responsividade. Aqui está um exemplo de como estilizamos o painel direito:

```css
.right-panel {
    background-color: #ffffff;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 30px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.right-panel p {
    font-size: 20px;
    color: #2e5077;
}
```

### Dificuldades Enfrentadas

- **Responsividade**: Ajustar o design para diferentes tamanhos de tela foi desafiador. A utilização das media queries foi crucial para fazer a página se adaptar bem a tablets e celulares.

## JavaScript

O JavaScript adiciona funcionalidades para criptografar e descriptografar o texto. Veja um trecho de como implementamos a criptografia:

```javascript
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const shift = 3;

function encrypt(text) {
    return text.split('').map(char => {
        const index = alphabet.indexOf(char);
        if (index === -1) return char;
        return alphabet[(index + shift) % alphabet.length];
    }).join('');
}
```

### Dificuldades Enfrentadas

- **Manipulação de Strings**: A lógica de criptografia e descriptografia exigiu uma manipulação cuidadosa das strings. Aprender a usar métodos como `split()`, `map()` e `join()` foi um desafio inicial.

## Conclusão

Desenvolver este projeto foi uma ótima oportunidade para aprender HTML, CSS e JavaScript na prática. Cada parte do projeto tem seu próprio conjunto de desafios, e superar esses desafios ajudou a melhorar minha compreensão das tecnologias web. Espero que este README seja útil para compreender como fiz e que possa ajudar em alguma atividade de quem está lendo esse texto! Lembrando que os cursos da Alura foram cruciais para o meu aprendizado.

## [Link da Página do Decodificar](https://eduardareis3332.github.io/ONE-Alura/Challenge/index.html)