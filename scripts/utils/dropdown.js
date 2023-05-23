var menu = document.querySelector('.dropdown'); // Bouton du menu déroulant
var menuButton = document.getElementById('dropdown-btn'); // Bouton du menu déroulant
var menuList = document.getElementById('dropdown-content'); // Liste des options du menu déroulant


// // Fonction appelée pour trié les médias
async function selectTri(option) {
  // eslint-disable-next-line no-undef
  const { media } = await getPhotographers();
  let mediaOrdonnees = Array.from(media);

  if (option === 'Popularité') {
    mediaOrdonnees.sort(function (a, b) {
      return a.likes - b.likes;
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


// Fonction appelée lors de la sélection d'une option pour appelé la fonction tri et modifi& le tite du menu
function selectOption(option) {
  menuButton.innerHTML = option; 
  menuButton.setAttribute('aria-expanded', 'false'); 
  menuList.style.display = 'none'; 
  selectTri(option)
  menuButton.setAttribute('aria-activedescendant', 'selectedOption');
}

// Fonction appelée lors du clic sur le bouton du menu déroulant pour affiché celui ci
function toggleMenu() {
  var expanded = menuButton.getAttribute('aria-expanded') === 'true' || false; // Vérifie si le menu est ouvert ou fermé
  menuButton.setAttribute('aria-expanded', !expanded); // Inverse l'état du menu (ouvert -> fermé, fermé -> ouvert)
  
  if (expanded) {
    menu.classList.remove('open')
  }
  else {
    menu.classList.add('open')
  }
  
  menuList.style.display = expanded ? 'none' : 'block'; // Affiche ou masque la liste des options en fonction de l'état du menu
}

menuButton.addEventListener('click', toggleMenu);

// Sélectionne l'option 1 par défaut lors du chargement de la page
selectOption('Populaire');

