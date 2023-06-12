const toTop = document.querySelector(".buttonTop");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 600) {
        toTop.classList.add("ativado");
    } else {
        toTop.classList.remove("ativado");
    }
})