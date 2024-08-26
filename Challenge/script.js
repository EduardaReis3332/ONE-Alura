document.addEventListener('DOMContentLoaded', () => {
    const cryptoBtn = document.querySelector('.btn-crypto');
    const decryptoBtn = document.querySelector('.btn-decrypto');
    const textarea = document.querySelector('textarea');
    const result = document.querySelector('.right-panel .result');
    const resultImage = document.querySelector('.result-image');
    const resultText = document.querySelector('.result-text');
    const info = document.querySelector('.info');
    const copyBtn = document.querySelector('.btn-copy');

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const shift = 3;

    function encrypt(text) {
        return text.split('').map(char => {
            const index = alphabet.indexOf(char);
            if (index === -1) return char;
            return alphabet[(index + shift) % alphabet.length];
        }).join('');
    }

    function decrypt(text) {
        return text.split('').map(char => {
            const index = alphabet.indexOf(char);
            if (index === -1) return char;
            return alphabet[(index - shift + alphabet.length) % alphabet.length];
        }).join('');
    }

    function showResult(text) {
        result.textContent = text;
        resultImage.style.display = 'none';
        resultText.style.display = 'none';
        copyBtn.classList.remove('hidden'); // Mostra o botão de copiar
    }

    function showDefault() {
        result.textContent = 'Nenhuma mensagem encontrada';
        resultImage.style.display = 'block';
        resultText.style.display = 'block';
        copyBtn.classList.add('hidden'); // Esconde o botão de copiar
    }

    cryptoBtn.addEventListener('click', () => {
        const inputText = textarea.value;
        if (!inputText) {
            info.textContent = 'Digite um texto para criptografar.';
            return;
        }
        const encryptedText = encrypt(inputText);
        showResult(`${encryptedText}`);
        info.textContent = '';
    });

    decryptoBtn.addEventListener('click', () => {
        const inputText = textarea.value;
        if (!inputText) {
            info.textContent = 'Digite um texto para descriptografar.';
            return;
        }
        const decryptedText = decrypt(inputText);
        showResult(`${decryptedText}`);
        info.textContent = '';
    });

    copyBtn.addEventListener('click', () => {
        const textToCopy = result.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Texto copiado para a área de transferência!');
        }).catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
    });

    showDefault();
});
