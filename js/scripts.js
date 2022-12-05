window.sr = ScrollReveal({ reset: true });

sr.reveal('.paragrafo', { duration: 2000 });
sr.reveal('.bloco-img', { duration: 2000 });
sr.reveal('.botao-sobremim', { duration: 2000 });
sr.reveal('.container-skills', { duration: 3000 });
sr.reveal('.um', { duration: 1500 });
sr.reveal('.dois', { duration: 3500 });
sr.reveal('.tres', { duration: 5000 });
sr.reveal('.quatro', { duration: 6000 });




const skillbox = document.querySelectorAll(".skillbox");
skillbox.forEach(element => element.addEventListener("click", function () {
    this.classList.toggle("flip")
}))



const toTop = document.querySelector(".link-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 700) {
    toTop.classList.add("ativado");
  } else {
    toTop.classList.remove("ativado");
  }
})









