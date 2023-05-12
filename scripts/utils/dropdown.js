// Fonction appelée lorsqu'une option est sélectionnée
function selectOption(option) {
    var dropdownBtn = document.getElementById('dropdown-btn');
    var selectedOptionText = option.textContent;

    // Réinitialiser les styles de toutes les options
    var options = document.querySelectorAll('.dropdown-content a');
    options.forEach(function (opt) {
        opt.style.display = "block";
    });

    // Masquer l'option sélectionnée dans la liste déroulante
    option.style.display = "none";

    // Mettre à jour le titre du menu avec l'option sélectionnée
    dropdownBtn.textContent = selectedOptionText;
}

// Appeler la fonction avec l'option par défaut au chargement de la page
window.onload = function () {
    var defaultOption = document.querySelector('.dropdown-content a');
    selectOption(defaultOption);
};