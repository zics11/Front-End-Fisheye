/* eslint-disable no-unused-vars */
function mediaFactory(data) {
    const { photographerId, image, id, title, likes, date, price, video } = data;
    const picture = `assets/medias/${image}`;
    const movie = `assets/medias/${video}`;
    function getMediaCardDOM() {
        let datas = Object.keys(data);
        if (datas.includes('image')) {
            const article = document.createElement('article');
            const lien = document.createElement('a');
            lien.href = `photographer.html?id=${id}`;
            lien.title = title;
            const img = document.createElement('img');
            img.setAttribute("src", picture);
            img.alt = title;
            const description = document.createElement('div')
            const titre = document.createElement('h2');
            titre.textContent = title;
            const like = document.createElement('span');
            like.textContent = likes;
            article.appendChild(lien);
            lien.appendChild(img);
            article.appendChild(description);
            description.appendChild(titre);
            description.appendChild(like);
            return (article);
        } else {
            const article = document.createElement('article');
            const lien = document.createElement('a');
            lien.href = `photographer.html?id=${id}`;
            lien.title = title;
            const videos = document.createElement('video');
            videos.setAttribute("src", movie);
            videos.alt = title;
            const description = document.createElement('div')
            const titre = document.createElement('h2');
            titre.textContent = title;
            const like = document.createElement('span');
            like.textContent = likes;
            article.appendChild(lien);
            lien.appendChild(videos);
            article.appendChild(description);
            description.appendChild(titre);
            description.appendChild(like);
            return (article);
        }
    }
    return { photographerId, image, id, title, likes, date, price, video, getMediaCardDOM }
}