function calcularIMC(){
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('imc');
    resultado.innerHTML = (peso/(altura^2)).toFixed(2);
};