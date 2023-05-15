
// function displayLightboxModal(index) {
//     const modal = document.getElementById('lightbox-modal');
//     const modalImage = document.getElementById('modal-image');
//     const mediaElements = document.querySelectorAll('.media-card');
//     const imageUrl = mediaElements[index].src;
//     modalImage.src = imageUrl;
//     modal.style.display = 'flex';
// }

function displayLightboxModal(index) {
    const modal = document.getElementById('lightbox-modal');
    const modalContent = document.getElementById('lightbox-content');
    const mediaElements = document.querySelectorAll('.media-card');
    const mediaElement = mediaElements[index];

    // // Supprimer tous les éléments enfants du contenu modal existant
    // while (modalContent.firstChild) {
    //     modalContent.removeChild(modalContent.firstChild);
    // }

    // Créer un nouvel élément de média en fonction du type (image ou vidéo)
    if (mediaElement.classList.contains('image-card')) {
        const imageSrc = mediaElement.src;
        const imageElement = document.createElement('img');
        imageElement.src = imageSrc;
        imageElement.alt = 'Lightbox Image';
        modalContent.appendChild(imageElement);
    } else if (mediaElement.classList.contains('video-card')) {
        const videoSrc = mediaElement.src;
        const videoElement = document.createElement('video');
        videoElement.src = videoSrc;
        videoElement.autoplay = true;
        videoElement.controls = true;
        modalContent.appendChild(videoElement);
    }

    // Afficher la modale
    modal.style.display = 'flex';
}
