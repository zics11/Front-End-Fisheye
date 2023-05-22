// Fonction appelée lorsqu'une option est sélectionnée
async function selectTri(option) {
    // eslint-disable-next-line no-undef
    const { media } = await getPhotographers();
    console.log("option", option)
    let dropdownBtn = document.getElementById('dropdown-btn');
    let selectedOptionText = option.textContent;


    // Réinitialiser les styles de toutes les options
    let options = document.querySelectorAll('.dropdown-content a');
    options.forEach(function (opt) {
        opt.style.display = "block";
    });

    // Masquer l'option sélectionnée dans la liste déroulante
    option.style.display = "none";

    // Mettre à jour le titre du menu avec l'option sélectionnée
    dropdownBtn.textContent = selectedOptionText;
    let mediaOrdonnees = Array.from(media);

    if (selectedOptionText === 'Popularité') {
        mediaOrdonnees.sort(function (a, b) {
            return a.likes - b.likes;
        });
        document.querySelector(".photograph-media").innerHTML = "";
        // eslint-disable-next-line no-undef
        triMediaIdPhotographer(mediaOrdonnees);
        console.log("option")
    }

    if (selectedOptionText === 'Date') {
        mediaOrdonnees.sort(function (a, b) {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA.getTime() - dateB.getTime();
        });
        document.querySelector(".photograph-media").innerHTML = "";
        // eslint-disable-next-line no-undef
        triMediaIdPhotographer(mediaOrdonnees);
    }

    if (selectedOptionText === 'Titre') {
        mediaOrdonnees.sort(function (a, b) {
            return a.title.localeCompare(b.title);
        });
        document.querySelector(".photograph-media").innerHTML = "";

        // eslint-disable-next-line no-undef
        triMediaIdPhotographer(mediaOrdonnees);
    }

}

// Appeler la fonction avec l'option par défaut au chargement de la page
window.onload = function () {
    let defaultOption = document.querySelector('.dropdown-content a');
    selectTri(defaultOption);
};