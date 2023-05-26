// eslint-disable-next-line no-unused-vars
function photographerFactory(data) {
  const { name, portrait, id, city, country, tagline, price } = data;
  const picture = `assets/photographers/${portrait}`;

  // La fonction getUserCardDOM génère et retourne un élément DOM représentant une carte utilisateur
  function getUserCardDOM() {
    const article = document.createElement('article');
    const lien = document.createElement('a');
    lien.href = `photographer.html?id=${id}`;
    lien.title = name;
    lien.setAttribute("tabindex", 3);
    const img = document.createElement('img');
    img.setAttribute("src", picture);
    img.alt = `portrait de ${name}`;
    const h2 = document.createElement('h2');
    h2.textContent = name;
    const description = document.createElement('div');
    description.setAttribute("tabindex", 3);
    const locationElement = document.createElement('p');
    locationElement.className = "locationElement";
    locationElement.textContent = `${city}, ${country}`;
    const taglineElement = document.createElement('p');
    taglineElement.className = "taglineElement";
    taglineElement.textContent = tagline;
    const priceElement = document.createElement('p');
    priceElement.className = "priceElement";
    priceElement.textContent = `${price}€/jour`;

    // Ajoute les éléments créés à la structure de la carte utilisateur
    article.appendChild(lien);
    lien.appendChild(img);
    lien.appendChild(h2);
    article.appendChild(description);
    description.appendChild(locationElement);
    description.appendChild(taglineElement);
    description.appendChild(priceElement);

    return article; // Retourne l'élément <article> de la carte utilisateur
  }

  // La fonction photographerCardDOM génère et retourne un élément DOM représentant une carte photographe
  function photographerCardDOM() {
    const article = document.createElement('article');
    const titre = document.createElement('div');
    const h2 = document.createElement('h2');
    const modal = document.getElementById("contact_modal");
    modal.setAttribute("aria-labelledby", `Contactez-moi ${name}`);
    h2.textContent = name;
    h2.setAttribute('tabindex', 1);
    const description = document.createElement('div');
    description.setAttribute('tabindex', 1);
    const locationElement = document.createElement('p');
    locationElement.className = "locationElement";
    locationElement.textContent = `${city}, ${country}`;
    const taglineElement = document.createElement('p');
    taglineElement.className = "taglineElement";
    taglineElement.textContent = tagline;
    const button = document.createElement("button");
    button.className = "contact_button";
    button.textContent = "Contactez-moi";
    button.setAttribute("onclick", "displayModal()");
    button.setAttribute("aria-label", "ouvrir formulaire de contact");
    button.setAttribute('tabindex', 1);
    const img = document.createElement('img');
    img.setAttribute("src", picture);
    img.alt = `portrait de ${name}`;
    img.setAttribute('tabindex', 1);
    const boxPrice = document.createElement('div');
    boxPrice.className = 'boxPrice';
    boxPrice.setAttribute('tabindex', 1);
    const divLike = document.createElement('div');
    divLike.className = "div-like";
    const priceElement = document.createElement('p');
    priceElement.className = "priceElement";
    priceElement.textContent = `${price}€/jour`;

    // Ajoute les éléments créés à la structure de la carte photographe
    article.appendChild(titre);
    titre.appendChild(h2);
    titre.appendChild(description);
    description.appendChild(locationElement);
    description.appendChild(taglineElement);
    article.appendChild(button);
    article.appendChild(img);
    article.appendChild(boxPrice);
    boxPrice.appendChild(divLike);
    boxPrice.appendChild(priceElement);

    return article; // Retourne l'élément <article> de la carte photographe
  }

  // Retourne un objet contenant les données du photographe et les fonctions getUserCardDOM et photographerCardDOM
  return { name, portrait, id, city, country, tagline, price, getUserCardDOM, photographerCardDOM };
}
