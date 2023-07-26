var imgAtual = "img/showmore.png";
var imgAnterior = "img/showless.png";

function replace() {
    document.getElementById("replaceButton").src = imgAnterior;
    let trc = imgAnterior;
    imgAnterior = imgAtual;
    imgAtual = trc;
}

const btnShow = document.getElementById('replaceButton')

function toggleMenu() {
    const show = document.querySelector('#projects')
    show.classList.toggle('active')
}

btnShow.addEventListener('click', toggleMenu);










