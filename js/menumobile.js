const btnMobile = document.getElementById('buttonMobile')

function toggleMenu() {
    const nav = document.querySelector('#nav')
    nav.classList.toggle('active')
}

buttonMobile.addEventListener('click', toggleMenu);
