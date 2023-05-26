var imgAtual = "img/vermais.webp";
var imgAnterior = "img/vermenos.webp";

function trocar() {
    document.getElementById("troca").src = imgAnterior;
    let trc = imgAnterior;
    imgAnterior = imgAtual;
    imgAtual = trc;
}

const btnShow = document.getElementById('troca')

function toggleMenu() {
    const show = document.querySelector('#projects')
    show.classList.toggle('ativo')
}

btnShow.addEventListener('click', toggleMenu);