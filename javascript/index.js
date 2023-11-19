

const container = document.querySelector('.container');
const botaoFechar = document.querySelector('.icone-fechar');

document.getElementById('btnLogin').addEventListener('click', function() {
    
    container.classList.toggle('container-visivel');
});

document.getElementById('fecharJanela').addEventListener('click', function(){

    container.classList.remove('container-visivel');
});