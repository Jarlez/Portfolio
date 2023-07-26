const toTop = document.querySelector(".buttonTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        toTop.classList.add("activated");
    } else {
        toTop.classList.remove("activated");
    }
});

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('#nav');
    var scrolled = window.scrollY || document.documentElement.scrollTop;

    if (scrolled > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});