const skillbox = document.querySelectorAll(".skillbox");
skillbox.forEach(element => element.addEventListener("click", function () {
    this.classList.toggle("flip")
}))