const abilityBox = document.querySelectorAll(".abilityBox");
abilityBox.forEach(element => element.addEventListener("click", function () {
    this.classList.toggle("flip")
}))