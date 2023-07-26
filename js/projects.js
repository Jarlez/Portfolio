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
    closeModal(modal);
  });
});


document.addEventListener('keydown', function (event) {
  // Verifica se a tecla pressionada é a tecla "Esc" (Escape)
  if (event.key === 'Escape') {
    // Fecha o modal
    var activeModal = document.querySelector('.modal[style*="display: block"]');
    if (activeModal) {
      closeModal(activeModal);
    }
  }
});


// Função para fechar o modal
function closeModal(modal) {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
  mainContent.style.pointerEvents = 'auto'; // Permitir interação com a tela principal novamente
}





function closeModalOnClickOutside(modal) {
  window.addEventListener('click', function (event) {
    if (modal.style.display === 'block' && !modal.contains(event.target)) {
      closeModal(modal);
    }
  });
}

// Event listener para exibir o modal ao clicar na lupa do card
document.querySelectorAll('.zoomIcon').forEach(function (zoomIcon, index) {
  zoomIcon.addEventListener('click', function () {
    const modal = modals[index];
    openModal(modal);
    closeModalOnClickOutside(modal); // Chama a função para fechar o modal ao clicar fora da imagem
  });
});



