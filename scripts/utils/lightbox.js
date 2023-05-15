// function displayLightboxModal(index) {
//     const modal = document.getElementById('lightbox-modal');
//     const modalImage = document.getElementById('modal-image');
//     init().then(images => {
//         const imageUrl = images[index].image;
//         modalImage.src = `assets/medias/${imageUrl}`;
//         modal.style.display = "block";

//     });
//     modal.style.display = "block";
// }

function displayLightboxModal(index) {
    const modal = document.getElementById('lightbox-modal');
    const modalImage = document.getElementById('modal-image');
    const mediaElements = document.querySelectorAll('.media-card');
    const imageUrl = mediaElements[index].querySelector('img').src;
    modalImage.src = imageUrl;
    modal.style.display = 'block';
}