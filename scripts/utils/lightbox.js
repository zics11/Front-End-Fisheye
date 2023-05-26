/* eslint-disable no-unused-vars */

// La fonction displayLightboxModal affiche le contenu d'un média dans une lightbox modale en fonction de l'index spécifié
function displayLightboxModal(index) {
  const modal = document.getElementById('lightbox-modal');
  const modalContent = document.getElementById('media-content');
  const mediaElements = document.querySelectorAll('.media-card');
  const mediaElement = mediaElements[index];

  // Crée un nouvel élément de média en fonction du type (image ou vidéo)
  if (mediaElement.classList.contains('image-card')) {
    const imageSrc = mediaElement.src;
    const imageTitle = mediaElement.alt;
    const imageElement = document.createElement('img');
    const titleElement = document.createElement('h2');

    imageElement.src = imageSrc;
    imageElement.alt = imageTitle;
    imageElement.className = 'media';
    imageElement.setAttribute('tabindex', 1);

    titleElement.textContent = imageTitle;
    titleElement.setAttribute('tabindex', 1);

    modalContent.appendChild(imageElement);
    modalContent.appendChild(titleElement);
  } else if (mediaElement.classList.contains('video-card')) {
    const videoSrc = mediaElement.src;
    const videoTitle = mediaElement.alt;
    const videoElement = document.createElement('video');
    const titleElement = document.createElement('h2');

    videoElement.src = videoSrc;
    videoElement.className = 'media';
    videoElement.setAttribute('tabindex', 1);

    titleElement.textContent = videoTitle;
    titleElement.setAttribute('tabindex', 1);

    videoElement.autoplay = true;
    videoElement.controls = true;

    modalContent.appendChild(videoElement);
    modalContent.appendChild(titleElement);
  }

  // Affiche la modale
  modal.style.display = 'flex';
  modal.focus();
}

// La fonction showPreviousMedia affiche le média précédent dans la lightbox modale
function showPreviousMedia() {
  const mediaElements = Array.from(document.querySelectorAll('.media-card'));
  const modalContent = document.getElementById('media-content');
  const currentImage = modalContent.querySelector('.media').src;
  const currentIndex = mediaElements.findIndex(element => element.src === currentImage);
  let previousIndex = currentIndex - 1;

  if (previousIndex < 0) {
    previousIndex = currentIndex;
  }

  while (modalContent.firstChild) {
    modalContent.removeChild(modalContent.firstChild);
  }

  displayLightboxModal(previousIndex);
}

// La fonction showNextMedia affiche le média suivant dans la lightbox modale
function showNextMedia() {
  const mediaElements = Array.from(document.querySelectorAll('.media-card'));
  const modalContent = document.getElementById('media-content');
  const currentImage = modalContent.querySelector('.media').src;
  const currentIndex = mediaElements.findIndex(element => element.src === currentImage);
  let nextIndex = currentIndex + 1;

  if (nextIndex >= mediaElements.length) {
    nextIndex = currentIndex;
  }

  while (modalContent.firstChild) {
    modalContent.removeChild(modalContent.firstChild);
  }

  displayLightboxModal(nextIndex);
}

// La fonction closeLightbox ferme la lightbox modale
function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const modalContent = document.getElementById('media-content');

  while (modalContent.firstChild) {
    modalContent.removeChild(modalContent.firstChild);
  }

  modal.style.display = 'none';
}

// Écoute les événements de touche pour les flèches gauche, droite et la touche échappement (esc)
document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') {
    showPreviousMedia();
  }
  if (event.key === 'ArrowRight') {
    showNextMedia();
  }
  if (event.key === 'Escape') {
    closeLightbox();
  }
});
