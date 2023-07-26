const carousels = document.querySelectorAll('.projectImage');
const prevButtons = document.querySelectorAll('.arrow.prev');
const nextButtons = document.querySelectorAll('.arrow.next');

for (let i = 0; i < carousels.length; i++) {
  const carousel = carousels[i];
  const prevButton = prevButtons[i];
  const nextButton = nextButtons[i];

  prevButton.addEventListener('click', () => {
    carousel.scrollBy(-carousel.offsetWidth, 0);
  });

  nextButton.addEventListener('click', () => {
    carousel.scrollBy(carousel.offsetWidth, 0);
  });

  // Verificar a posição atual do carrossel e ocultar os botões apropriados
  carousel.addEventListener('scroll', () => {
    if (carousel.scrollLeft === 0) {
      prevButton.style.visibility = 'hidden';
    } else {
      prevButton.style.visibility = 'initial';
    }

    if (carousel.scrollLeft + carousel.offsetWidth === carousel.scrollWidth) {
      nextButton.style.visibility = 'hidden';
    } else {
      nextButton.style.visibility = 'initial';
    }
  });
}

// Função para exibir o modal correspondente ao card
function openModal(modal) {
  modal.style.display = 'block';
  const modalImages = modal.querySelectorAll('.modalCarouselImage');
  showImage(modal, 0);
  body.style.overflow = 'hidden';
  mainContent.style.pointerEvents = 'none'; // Bloquear interação com a tela principal
}

// Função para exibir a imagem atual no modal
function showImage(modal, imageIndex) {
  const modalImages = modal.querySelectorAll('.modalCarouselImage');

  for (let i = 0; i < modalImages.length; i++) {
    modalImages[i].style.display = 'none';
  }

  modalImages[imageIndex].style.display = 'block';
}

// Função para navegar pelo carrossel no modal
function navigateCarousel(modal, direction) {
  const modalImages = modal.querySelectorAll('.modalCarouselImage');
  let currentIndex = 0;

  for (let i = 0; i < modalImages.length; i++) {
    if (modalImages[i].style.display === 'block') {
      currentIndex = i;
      break;
    }
  }

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = modalImages.length - 1;
  } else if (currentIndex >= modalImages.length) {
    currentIndex = 0;
  }

  showImage(modal, currentIndex);
}

// Adicionando eventos aos elementos de cada card
const cards = document.querySelectorAll('.projectCard');
const modals = document.querySelectorAll('.modal');
const zoomIcons = document.querySelectorAll('.zoomIcon');
const mainContent = document.querySelector('.mainContent');
const body = document.querySelector('body');

cards.forEach((card, index) => {
  const modal = modals[index];
  const prevArrow = modal.querySelector('.modalCarouselArrow.prev');
  const nextArrow = modal.querySelector('.modalCarouselArrow.next');
  const closeButton = modal.querySelector('.close');
  const zoomIcon = zoomIcons[index];

  zoomIcon.addEventListener('click', () => {
    openModal(modal);
  });

  prevArrow.addEventListener('click', () => {
    navigateCarousel(modal, -1);
  });

  nextArrow.addEventListener('click', () => {
    navigateCarousel(modal, 1);
  });

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    body.style.overflow = 'auto';
    mainContent.style.pointerEvents = 'auto';
  });
});


// Encontra todos os elementos com a classe "projectCard"
var projectCards = document.querySelectorAll('.projectCard');

// Itera sobre cada elemento
projectCards.forEach(function (card) {
  // Verifica se o carrossel contém apenas uma imagem
  var carouselImages = card.querySelectorAll('.carouselImage');

  if (carouselImages.length === 1) {
    // Remove as divs com a classe "arrow"
    var arrows = card.querySelectorAll('.arrow');
    arrows.forEach(function (arrow) {
      arrow.parentNode.removeChild(arrow);
    });
  }
});

var modalIs = document.querySelectorAll('.modal');

// Itera sobre cada modal
modalIs.forEach(function (modal) {
  // Verifica se o carrossel do modal contém apenas uma imagem
  var carouselImages = modal.querySelectorAll('.modalCarouselImage');

  if (carouselImages.length === 1) {
    // Oculta as divs com a classe "modalCarouselArrow"
    var arrows = modal.querySelectorAll('.modalCarouselArrow');
    arrows.forEach(function (arrow) {
      arrow.style.display = 'none';
    });
  }
});




