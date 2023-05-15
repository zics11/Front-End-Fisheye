/* eslint-disable no-unused-vars */
function mediaFactory(data, index) {
    const { photographerId, image, id, title, likes, date, price, video } = data;
    const picture = `assets/medias/${image}`;
    const movie = `assets/medias/${video}`;

    function getMediaCardDOM() {
        let datas = Object.keys(data);
        if (datas.includes('image')) {
            const article = document.createElement('article');
            const img = document.createElement('img');
            img.setAttribute("src", picture);
            img.className = "media-card";
            img.alt = title;
            img.setAttribute("onclick",`displayLightboxModal(${index})`);
            const description = document.createElement('div')
            const titre = document.createElement('h2');
            titre.textContent = title;
            const like = document.createElement('span');
            like.textContent = likes;
            article.appendChild(img);
            article.appendChild(description);
            description.appendChild(titre);
            description.appendChild(like);
            return (article);
        } else {
            const article = document.createElement('article');
            const videos = document.createElement('video');
            videos.setAttribute("src", movie);
            videos.alt = title;
            const description = document.createElement('div')
            const titre = document.createElement('h2');
            titre.textContent = title;
            const like = document.createElement('span');
            like.textContent = likes;
            article.appendChild(videos);
            article.appendChild(description);
            description.appendChild(titre);
            description.appendChild(like);
            return (article);
        }
    }
    return { photographerId, image, id, title, likes, date, price, video, index, getMediaCardDOM }
}