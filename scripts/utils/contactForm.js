const form = document.getElementById('form-contact');
const nomInput = document.getElementById('nom');
const prenomInput = document.getElementById('prenom');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    var isFormValid = true;

    // Vérifier la validité du champ Nom
    if (nomInput.value === '') {
        document.getElementById('nomError').textContent = 'Veuillez saisir votre nom.';
        isFormValid = false;
    } else {
        document.getElementById('nomError').textContent = '';
    }

    // Vérifier la validité du champ Prénom
    if (prenomInput.value === '') {
        document.getElementById('prenomError').textContent = 'Veuillez saisir votre prénom.';
        isFormValid = false;
    } else {
        document.getElementById('prenomError').textContent = '';
    }

    // Vérifier la validité du champ Email
    if (emailInput.value === '') {
        document.getElementById('emailError').textContent = 'Veuillez saisir votre email.';
        isFormValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        document.getElementById('emailError').textContent = 'Veuillez saisir un email valide.';
        isFormValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Vérifier la validité du champ Message
    if (messageInput.value === '') {
        document.getElementById('messageError').textContent = 'Veuillez saisir votre message.';
        isFormValid = false;
    } else {
        document.getElementById('messageError').textContent = '';
    }

    // Si le formulaire est valide, afficher les données dans la console
    if (isFormValid) {
        console.log('Nom:', nomInput.value);
        console.log('Prénom:', prenomInput.value);
        console.log('Email:', emailInput.value);
        console.log('Message:', messageInput.value);
        closeModal()
    }
});

// ...

// Fonction pour vérifier la validité de l'email
function isValidEmail(email) {
    var emailRegex = /^\S+@\S+\.\S+/;
    return emailRegex.test(email);
}







// eslint-disable-next-line no-unused-vars
function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    form.reset();
}

