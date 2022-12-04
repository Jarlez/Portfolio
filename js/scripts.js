window.sr = ScrollReveal({ reset: true });

sr.reveal('.paragrafo', { duration: 2000 });
sr.reveal('.bloco-img', { duration: 2000 });
sr.reveal('.botao-sobremim', { duration: 2000 });
sr.reveal('.container-skills', { duration: 3000 });
sr.reveal('.um', { duration: 1500 });
sr.reveal('.dois', { duration: 3500 });
sr.reveal('.tres', { duration: 5000 });
sr.reveal('.quatro', { duration: 6000 });


const btn = document.getElementById("btn-top")

document.addEventListener('scroll', ocultar)

function ocultar() {

    if (window.scrollY > 600) {
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}

const skillbox = document.querySelectorAll(".skillbox");
skillbox.forEach(element => element.addEventListener("click", function () {
    this.classList.toggle("flip")
}))










