// La fonction getPhotographers est asynchrone et récupère les données des photographes à partir du fichier photographers.json
async function getPhotographers() {
  const response = await fetch('data/photographers.json');
  const data = await response.json();
  const photographers = data.photographers;
  const media = data.media;
  return { photographers, media }; // Retourne les données des photographes et des médias
}

// La fonction idPhotographer récupère l'identifiant du photographe à partir des paramètres de l'URL de la page
function idPhotographer() {
  let urlcourante = window.location;
  const params = new URL(urlcourante).searchParams;
  const idUrl = Number(params.get('id'));
  return idUrl; // Retourne l'identifiant du photographe extrait de l'URL
}

// La fonction displayData affiche les données du photographe correspondant à l'identifiant spécifié dans le DOM
async function displayData(photographers) {
  const photographersSection = document.querySelector('.photograph-header');
  const contactSection = document.querySelector('.modal-header');

  photographers.forEach((photographer) => {
    if (photographer.id === idPhotographer()) {
      // eslint-disable-next-line no-undef
      const photographerModel = photographerFactory(photographer);
      const userCardDOM = photographerModel.photographerCardDOM();
      photographersSection.appendChild(userCardDOM);

      // Ajoute le nom du photographe dans la section de contact du modal
      const h2 = document.createElement('h2');
      h2.textContent = photographer.name;
      contactSection.appendChild(h2);
    }
  });
}

const mediaSection = document.querySelector('.photograph-media');

// La fonction triMediaIdPhotographer filtre les médias en fonction de l'identifiant du photographe et les affiche dans le DOM
async function triMediaIdPhotographer(media) {
  const idPhotographers = idPhotographer();
  const mediaFiltres = media.filter(function (medias) {
    return medias.photographerId === idPhotographers;
  });

  mediaFiltres.forEach((media, index) => {
    // eslint-disable-next-line no-undef
    const mediaModel = mediaFactory(media, index);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    mediaSection.appendChild(mediaCardDOM);
    media.index = mediaFiltres.indexOf(media);
  });

  return mediaFiltres; // Retourne les médias filtrés
}

// La fonction addLike gère l'ajout ou la suppression d'un like sur un média
// eslint-disable-next-line no-unused-vars
function addLike(index) {
  const likes = document.querySelectorAll('.like');
  const like = likes[index];

  let totalLike = document.querySelector('.total-like');

  if (like.classList.contains('like-ok')) {
    like.classList.remove('like-ok');
    --like.textContent;
    --totalLike.textContent;
  } else {
    like.classList.add('like-ok');
    ++like.textContent;
    ++totalLike.textContent;
  }
}

// La fonction countLike calcule le nombre total de likes et l'affiche dans le DOM
function countLike() {
  const likes = document.querySelectorAll('.like');
  let totalLikes = 0;

  likes.forEach(like => {
    const likesValue = parseInt(like.textContent);
    totalLikes += likesValue;
  });

  const divLike = document.querySelector('.div-like');
  const like = document.createElement('p');
  like.textContent = totalLikes;
  like.className = 'total-like';
  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-heart';
  divLike.appendChild(like);
  divLike.appendChild(icon);
}

// La fonction init est une fonction immédiatement invoquée qui initialise l'application
(async function init() {
  const { photographers, media } = await getPhotographers();

  // Affiche les données du photographe correspondant dans le DOM
  displayData(photographers);

  // Filtre et affiche les médias du photographe correspondant dans le DOM
  triMediaIdPhotographer(media);

  // Calcule et affiche le nombre total de likes dans le DOM
  countLike();
})();