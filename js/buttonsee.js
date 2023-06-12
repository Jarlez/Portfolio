var imgAtual = "img/vermais.webp";
var imgAnterior = "img/vermenos.webp";

function replace() {
    document.getElementById("replaceButton").src = imgAnterior;
    let trc = imgAnterior;
    imgAnterior = imgAtual;
    imgAtual = trc;
}

const btnShow = document.getElementById('replaceButton')

function toggleMenu() {
    const show = document.querySelector('#projects')
    show.classList.toggle('ativo')
}

btnShow.addEventListener('click', toggleMenu);