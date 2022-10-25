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



/* botão de animação "designer e "desenvolvedor"

let btn = document.querySelector("#designer");
let div = document.querySelector(".paragrafo1");
btn.addEventListener("click", () => {
  if (div.style.display === "none") {
    div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
});

let btn1= document.querySelector("#desenvolvedor");
let div1 = document.querySelector(".paragrafo2");
btn1.addEventListener("click", () => {
  if (div1.style.display === "none") {
    div1.style.display = "block";
  } else {
    div1.style.display = "none";
  }
}); 



const el = document.querySelector(".texto");
const text = "Olá, Seja Bem-Vindo ao meu site.\n Me chamo Jarles Sayhare, \nDesenvolvedor Front-End.";
const interval = 300;

function showText(el,text,interval){

const char=text.split("").reverse();

const typer= setInterval(() => {

if(!char.length) {
return clearInterval(typer);
}
const next = char.pop();

el.innerHTML += next;

}, interval);

}

showText(el,text,interval)

*/