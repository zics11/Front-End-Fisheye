/* eslint-disable no-undef */
async function getPhotographers() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
    // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
    const reponse = await fetch('data/photographers.json');
    const photographers = await reponse.json();

    // et bien retourner le tableau photographers seulement une fois récupéré
    return photographers
}

console.log("data",getPhotographers())

function idPhotographer() {
    let urlcourante = window.location;
    const params = (new URL(urlcourante)).searchParams;
    const idUrl = Number(params.get('id'));
    return idUrl
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photograph-header");
    photographers.forEach((photographer) => {
        if (photographer.id === idPhotographer()) {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.photographerCardDOM();
            photographersSection.appendChild(userCardDOM);
        }
    });
}

async function displayMedia(photographers) {
    const mediaSection = document.querySelector(".photograph-media");
    photographers.forEach((photographer) => {
        const mediaModel = mediaFactory(photographer);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
    });


}

async function init() {
    // Récupère les datas des photographes & des médias
    const { photographers } = await getPhotographers();
    const { media } = await getPhotographers();
    displayData(photographers);
    displayMedia(media);
}

init();
//Mettre le code JavaScript lié à la page photographer.html