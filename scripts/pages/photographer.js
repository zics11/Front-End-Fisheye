/* eslint-disable no-undef */
async function getPhotographers() {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    const photographers = data.photographers;
    const media = data.media;

    return { photographers, media };
}

console.log("data", getPhotographers());

function idPhotographer() {
    let urlcourante = window.location;
    const params = new URL(urlcourante).searchParams;
    const idUrl = Number(params.get('id'));
    return idUrl;
}

async function displayData(photographers) {
    const photographersSection = document.querySelector('.photograph-header');
    const contactSection = document.querySelector('.modal-header');
    photographers.forEach((photographer) => {
        if (photographer.id === idPhotographer()) {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.photographerCardDOM();
            photographersSection.appendChild(userCardDOM);
            // nom du photographe dans le modale de contact
            const h2 = document.createElement('h2');
            h2.textContent = photographer.name;
            contactSection.appendChild(h2);
        }
    });
}
const mediaSection = document.querySelector('.photograph-media');

async function triMediaIdPhotographer(media) {
    const idPhotographers = idPhotographer();
    const mediaFiltres = media.filter(function (medias) {
        return medias.photographerId === idPhotographers;
    });
    console.log("mediafiltres", mediaFiltres);
    mediaFiltres.forEach((media, index) => {
        const mediaModel = mediaFactory(media, index);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
        console.log("index", mediaFiltres.indexOf(media));
        media.index = mediaFiltres.indexOf(media);
    });
    return mediaFiltres;
}

(async function init() {
    const { photographers, media } = await getPhotographers();
    console.log("media", media);
    displayData(photographers);
    triMediaIdPhotographer(media);
})();
