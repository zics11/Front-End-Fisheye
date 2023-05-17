/* eslint-disable no-unused-vars */

// function displayLightboxModal(index) {
//     const modal = document.getElementById('lightbox-modal');
//     const modalImage = document.getElementById('modal-image');

function displayLightboxModal(index) {
    const modal = document.getElementById('lightbox-modal');
    const modalContent = document.getElementById('media-content');
    const mediaElements = document.querySelectorAll('.media-card');
    console.log("mediaElements", mediaElements)
    const mediaElement = mediaElements[index];

    // Créer un nouvel élément de média en fonction du type (image ou vidéo)
    if (mediaElement.classList.contains('image-card')) {
        const imageSrc = mediaElement.src;
        const imageTitle = mediaElement.alt;
        const imageElement = document.createElement('img');
        const titleElement = document.createElement('h2')
        imageElement.src = imageSrc;
        imageElement.alt = 'Lightbox Image';
        imageElement.className = "media"
        titleElement.textContent = imageTitle;
        modalContent.appendChild(imageElement);
        modalContent.appendChild(titleElement);
    } else if (mediaElement.classList.contains('video-card')) {
        const videoSrc = mediaElement.src;
        const videoTitle = mediaElement.alt;
        const videoElement = document.createElement('video');
        const titleElement = document.createElement('h2')
        videoElement.src = videoSrc;
        videoElement.className = "media"
        titleElement.textContent = videoTitle;
        videoElement.autoplay = true;
        videoElement.controls = true;
        modalContent.appendChild(videoElement);
        modalContent.appendChild(titleElement);

    }

    // Afficher la modale
    modal.style.display = 'flex';
}

// Fonction pour afficher le média précédent


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

// Fonction pour afficher le média suivant
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



function closeLightbox() {
    const modal = document.getElementById("lightbox-modal");
    const modalContent = document.getElementById('media-content');
    while (modalContent.firstChild) {
        modalContent.removeChild(modalContent.firstChild);
    }
    modal.style.display = "none";
}
