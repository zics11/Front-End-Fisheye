/* eslint-disable no-unused-vars */
function mediaFactory(data) {
    const { name, image, id, city, country, tagline, price } = data;

    const picture = `assets/images/${image}`;

    function getMediaCardDOM() {
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

    return { name, image, id, city, country, tagline, price, getMediaCardDOM }
}