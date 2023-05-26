// eslint-disable-next-line no-unused-vars
function mediaFactory(data, index) {
  const { photographerId, image, id, title, likes, date, price, video } = data;
  const picture = `assets/medias/${image}`;
  const movie = `assets/medias/${video}`;

  // La fonction getMediaCardDOM génère et retourne un élément DOM représentant une carte média
  function getMediaCardDOM() {
    let datas = Object.keys(data);
    if (datas.includes('image')) {
      // Crée un élément <article> pour la carte média avec une image
      const article = document.createElement('article');
      const img = document.createElement('img');
      img.setAttribute("tabindex", 1);
      img.setAttribute("src", picture);
      img.className = "media-card";
      img.classList.add("image-card");
      img.setAttribute("aria-label", `${title}, close up view`);
      img.alt = title;
      img.setAttribute("onclick", `displayLightboxModal(${index})`);
      img.setAttribute('tabindex', 1);

      // Crée un élément <div> pour la description de la carte média
      const description = document.createElement('div');
      const titre = document.createElement('h2');
      titre.textContent = title;
      titre.setAttribute('tabindex', 1);
      const like = document.createElement('span');
      like.textContent = likes;
      like.setAttribute("onclick", `addLike(${index})`);
      like.className = "like";
      like.setAttribute("aria-label", "likes");
      like.setAttribute('tabindex', 1);
      like.setAttribute("role", "button");

      // Ajoute les éléments créés à la structure de la carte média
      article.appendChild(img);
      article.appendChild(description);
      description.appendChild(titre);
      description.appendChild(like);

      return article; // Retourne l'élément <article> de la carte média avec une image
    } else {
      // Crée un élément <article> pour la carte média avec une vidéo
      const article = document.createElement('article');
      const videos = document.createElement('video');
      videos.setAttribute("src", movie);
      videos.className = "media-card";
      videos.classList.add("video-card");
      videos.setAttribute("aria-label", `${title}, close up view`);
      videos.setAttribute("onclick", `displayLightboxModal(${index})`);
      videos.setAttribute('tabindex', 1);
      videos.alt = title;

      // Crée un élément <div> pour la description de la carte média
      const description = document.createElement('div');
      const titre = document.createElement('h2');
      titre.textContent = title;
      titre.setAttribute('tabindex', 1);
      const like = document.createElement('span');
      like.textContent = likes;
      like.setAttribute("onclick", `addLike(${index})`);
      like.className = "like";
      like.setAttribute("aria-label", "likes");
      like.setAttribute('tabindex', 1);

      // Ajoute les éléments créés à la structure de la carte média
      article.appendChild(videos);
      article.appendChild(description);
      description.appendChild(titre);
      description.appendChild(like);

      return article; // Retourne l'élément <article> de la carte média avec une vidéo
    }
  }

  // Retourne un objet contenant les données du média et la fonction getMediaCardDOM
  return { photographerId, image, id, title, likes, date, price, video, index, getMediaCardDOM };
}
