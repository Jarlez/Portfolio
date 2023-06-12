const btnMobile = document.getElementById('btnMobile')

function toggleMenu() {
    const nav = document.querySelector('#nav')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);