// La fonction getPhotographers est asynchrone et récupère les données des photographes à partir du fichier photographers.json
async function getPhotographers() {
  const reponse = await fetch('data/photographers.json');
  const photographers = await reponse.json();
  return photographers; // Retourne les données des photographes
}

// La fonction displayData est asynchrone et affiche les données des photographes dans la section correspondante du DOM
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  // Parcourt les données des photographes
  photographers.forEach((photographer) => {
    // eslint-disable-next-line no-undef
    const photographerModel = photographerFactory(photographer); // Crée un objet photographe en utilisant la fonction factory photographerFactory
    const userCardDOM = photographerModel.getUserCardDOM(); // Génère la carte utilisateur correspondante à partir de l'objet photographe
    photographersSection.appendChild(userCardDOM); // Ajoute la carte utilisateur à la section des photographes dans le DOM
  });
}

// La fonction init est asynchrone et sert de point d'entrée de l'application
async function init() {
  // Récupère les données des photographes
  const { photographers } = await getPhotographers();

  // Affiche les données des photographes dans le DOM
  displayData(photographers);
}

// Appelle la fonction init pour initialiser l'application
init();