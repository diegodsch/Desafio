/*
    Funcionalidad del Encriptador de Texto
    en este archivo JavaScript maneje la lógica del proyecto.
    - la captura de los valores ingresados por el usuario.
    - validacion de que el texto solo contenga letras minusculas y espacios.
    - la creacion de las regrlas y el encriptado usando conversion de caracteres.
    - desencriptado para volver a texto original.
    - alerta del mensaje de validacion si el texto contiene caracteres no permitidos.
    - Api para copiar texto al portapapeles.
*/

document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const copyBtn = document.getElementById('copyBtn');
    const validationMsg = document.getElementById('validationMsg');

    encryptBtn.addEventListener('click', () => {
        const text = inputText.value;
        if (isValid(text)) {
            validationMsg.style.display = 'none';
            outputText.value = encrypt(text);
        } else {
            validationMsg.style.display = 'block';
        }
    });

    decryptBtn.addEventListener('click', () => {
        const text = inputText.value; 
        if (isValid(text)) {
            validationMsg.style.display = 'none';
            outputText.value = decrypt(text); 
        } else {
            validationMsg.style.display = 'block';
        }
    });
    
    

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(outputText.value)
            .then(() => {
                alert('Texto copiado al portapapeles');
            })
            .catch(err => {
                console.error('Error al copiar texto: ', err);
            });
    });

    function isValid(text) {
        const regex = /^[a-z\s]+$/;
        return regex.test(text);
    }

    function encrypt(text) {
        const rules = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };
        return text.split('').map(char => rules[char] || char).join('');
    }

    function decrypt(text) {
        const rules = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };
        let decrypted = text;
        for (let key in rules) {
            const regex = new RegExp(key, 'g');
            decrypted = decrypted.replace(regex, rules[key]);
        }
        return decrypted;
    }
});
