function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price} = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const cityElement = document.createElement('p');
        cityElement.textContent = city
        const countryElement = document.createElement('p');
        countryElement.textContent = country
        const taglineElement = document.createElement('p');
        taglineElement.textContent = tagline
        const priceElement = document.createElement('p');
        priceElement.textContent = price

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(cityElement);
        article.appendChild(countryElement);
        article.appendChild(taglineElement);
        article.appendChild(priceElement);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}