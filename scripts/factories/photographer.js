/* eslint-disable no-unused-vars */
function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const lien = document.createElement('a');
        lien.href = `photographer.html?id=${id}`;
        lien.title = name;
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.alt = `portrait de ${name}`;
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const description = document.createElement('div')
        const locationElement = document.createElement('p');
        locationElement.className = "locationElement"
        locationElement.textContent = `${city}, ${country}`
        const taglineElement = document.createElement('p');
        taglineElement.className = "taglineElement"
        taglineElement.textContent = tagline
        const priceElement = document.createElement('p');
        priceElement.className = "priceElement"
        priceElement.textContent = `${price}€/jour`

        article.appendChild(lien);
        lien.appendChild(img);
        lien.appendChild(h2);
        article.appendChild(description);
        description.appendChild(locationElement);
        description.appendChild(taglineElement);
        description.appendChild(priceElement);

        return (article);
    }

    function photographerCardDOM() {
        const article = document.createElement('article');
        const titre = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const locationElement = document.createElement('p');
        locationElement.className = "locationElement";
        locationElement.textContent = `${city}, ${country}`;
        const taglineElement = document.createElement('p');
        taglineElement.className = "taglineElement"
        taglineElement.textContent = tagline
        const button = document.createElement("button");
        button.className = "contact_button";
        button.textContent = "Contactez-moi"
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.alt = `portrait de ${name}`;

        const boxPrice = document.createElement('div');
        boxPrice.className = 'boxPrice';
        const divLike = document.createElement('div');
        const like = document.createElement('p');
        like.textContent = `100000`;
        const icon = document.createElement('i');
        icon.className = "fa-solid fa-heart";
        const priceElement = document.createElement('p');
        priceElement.className = "priceElement";
        priceElement.textContent = `${price}€/jour`;

        article.appendChild(titre);
        titre.appendChild(h2);
        titre.appendChild(locationElement);
        titre.appendChild(taglineElement);
        article.appendChild(button);
        article.appendChild(img)
        article.appendChild(boxPrice);
        boxPrice.appendChild(divLike);
        divLike.appendChild(like);
        divLike.appendChild(icon);
        boxPrice.appendChild(priceElement)

        return (article);
    }
    return { name, portrait, id, city, country, tagline, price, getUserCardDOM, photographerCardDOM }
}