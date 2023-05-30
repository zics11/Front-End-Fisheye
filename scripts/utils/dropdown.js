var menu = document.querySelector('.dropdown'); // Bouton du menu déroulant
var menuButton = document.getElementById('dropdown-btn'); // Bouton du menu déroulant
var menuList = document.getElementById('dropdown-content'); // Liste des options du menu déroulant

// Écouteur d'événements pour le clic sur le bouton du menu déroulant
menuButton.addEventListener('click', toggleMenu);

// La fonction toggleMenu est appelée lors du clic sur le bouton du menu déroulant pour afficher ou masquer le menu
function toggleMenu() {
  var expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
  menuButton.setAttribute('aria-expanded', !expanded);
  if (expanded) {
    menu.classList.remove('open');
  } else {
    menu.classList.add('open');
  }
  menuList.style.display = expanded ? 'none' : 'block';
}

// La fonction selectOption est appelée lors de la sélection d'une option dans le menu déroulant pour mettre à jour l'option sélectionnée et appeler la fonction selectTri
function selectOption(option) {
  menuButton.innerHTML = option;
  menuButton.setAttribute('aria-expanded', 'false');
  menuList.style.display = 'none';
  selectTri(option);
  menuButton.setAttribute('aria-activedescendant', 'selectedOption');
}

// La fonction selectTri est appelée pour trier les médias en fonction de l'option sélectionnée dans le menu déroulant
async function selectTri(option) {
  // eslint-disable-next-line no-undef
  const { media } = await getPhotographers();
  let mediaOrdonnees = Array.from(media);

  if (option === 'Popularité') {
    mediaOrdonnees.sort(function (a, b) {
      return b.likes - a.likes;
    });
    document.querySelector(".photograph-media").innerHTML = "";
    // eslint-disable-next-line no-undef
    triMediaIdPhotographer(mediaOrdonnees);
  }
  if (option === 'Date') {
    mediaOrdonnees.sort(function (a, b) {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    });
    document.querySelector(".photograph-media").innerHTML = "";
    // eslint-disable-next-line no-undef
    triMediaIdPhotographer(mediaOrdonnees);
  }
  if (option === 'Titre') {
    mediaOrdonnees.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
    document.querySelector(".photograph-media").innerHTML = "";
    // eslint-disable-next-line no-undef
    triMediaIdPhotographer(mediaOrdonnees);
  }
}

// Sélectionne l'option 'Populaire' par défaut lors du chargement de la page
selectOption('Popularité');
