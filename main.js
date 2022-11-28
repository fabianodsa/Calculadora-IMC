
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

calcular.addEventListener('click', imc);

function imc () {

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    if (altura !== '' && peso !== '' && nome !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        resultado.textContent = `${nome}, seu IMC é ${valorIMC}`;

    } else {
        resultado.textContent= 'Preencha todos os campos';
    }
}