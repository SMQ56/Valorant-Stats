import "./MapCard.css";

export const MapCard = (map) => {
  const article = document.createElement("article");
  article.classList.add("map-card");
  article.classList.add("scale-in-scroll");

  article.innerHTML = `
    <h3 class="map-name" style="background-image: url('${map.nameBG}'); ">${map.name}</h3>
    <p class="map-description">${map.description}</p>
    <div class="map-images">
        <div class="tallIcon-wrapper">
            <img src="${map.tallIcon}" alt="tall image" class="tallIcon" />
            <img src="${map.miniMap}" alt="${map.name} Mini map" class="tallIcon-miniMap" />
        </div>
      <div class="splash-hover-wrapper">
        <img src="${map.splash}" alt="Splash image" class="splash-img" />
        <img src="${map.hoverBG}" alt="Hover background" class="hover-bg-img" />
        <img src="${map.miniMap}" alt="${map.name} Mini map" class="hover-miniMap" />
      </div>
    </div>
  `;

  return article;
};
