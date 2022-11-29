
const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
  const nav = document.querySelector('#nav')
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);



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


var imgAtual = "img/vermais.png";
var imgAnterior = "img/vermenos.png";

function trocar() {
  document.getElementById("troca").src = imgAtual;
  let trc = imgAtual;
  imgAtual = imgAnterior;
  imgAnterior = trc;
}



const textDisplay = document.getElementById('typewriter')
const phrases = ['DESENVOLVIMENTO WEB', 'HTML , CSS E JAVASCRIPT', 'SITES RESPONSIVOS']
let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop() {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50
  const normalSpeed = Math.random() * (100 - 200) + 250
  const time = isEnd ? 1500 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()
