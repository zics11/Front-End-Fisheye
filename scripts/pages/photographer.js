/* eslint-disable no-undef */
async function getPhotographers() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
    // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
    const reponse = await fetch('data/photographers.json');
    const photographers = await reponse.json();

    // et bien retourner le tableau photographers seulement une fois récupéré
    return photographers
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photograph-header");
    let urlcourante = window.location; 
    const params = (new URL(urlcourante)).searchParams;
    const idurl = Number(params.get('id'));
    console.log("params", params);
    console.log("idphoto",idurl);


    photographers.forEach((photographer) => {
        if (photographer.id === idurl) {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.photographerCardDOM();
            photographersSection.appendChild(userCardDOM);
        }
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();
//Mettre le code JavaScript lié à la page photographer.html