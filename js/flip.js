const abilityCard = document.querySelectorAll(".abilityCard");
abilityCard.forEach(element => element.addEventListener("click", function () {
    this.classList.toggle("flip")
}))

