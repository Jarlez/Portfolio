const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(){
const nav = document.querySelector('#nav')
nav.classList.toggle('active')
}


btnMobile.addEventListener('click', toggleMenu);


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