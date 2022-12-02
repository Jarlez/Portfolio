const skillbox = document.querySelectorAll(".skillbox");
skillbox.forEach(element => element.addEventListener("click", function () {
    this.classList.toggle("flip")
}))

let btn = document.querySelector(".btn-see");
let div = document.querySelector(".hidden");
btn.addEventListener("click", () => {
    if (div.style.display === "none") {
        div.style.display = "flex";
    } else {
        div.style.display = "none";
    }
});

var imgAtual = "img/vermais.webp";
var imgAnterior = "img/vermenos.webp";

function trocar() {
    document.getElementById("troca").src = imgAtual;
    let trc = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = trc;
}
