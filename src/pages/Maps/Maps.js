import "./Maps.css";
import { getAllMaps } from "../../data/api.js";
import { MapCard } from "../../components/MapCard/MapCard.js";
import { cleanPage } from "../../utils/cleanPage.js";

export const Maps = async () => {
  const main = document.querySelector("main");
  cleanPage(main);
  const maps = await getAllMaps();

  const section = document.createElement("section");
  section.classList.add("page-section");

  const title = document.createElement("h2");
  title.textContent = "Maps";
  section.appendChild(title);

  const competitiveMaps = maps.filter((map) => map.mode === "Competitive");
  const tdmMaps = maps.filter((map) => map.mode === "TDM");

  const createMapSection = (titleText, mapArray, icon) => {
    const wrapper = document.createElement("section");
    wrapper.classList.add("map-mode-section");

    const stickyTitle = document.createElement("h3");
    stickyTitle.innerHTML = `<img src="${icon}" alt="mode icon" class="mode-icon" /> ${titleText} <img src="${icon}" alt="mode icon" class="mode-icon" />`;
    stickyTitle.classList.add("sticky-mode-title");
    stickyTitle.id = `sticky-${titleText}`;

    const grid = document.createElement("div");
    grid.classList.add("maps-grid");

    mapArray.forEach((map) => {
      const card = MapCard(map);
      grid.appendChild(card);
    });

    wrapper.appendChild(stickyTitle);
    wrapper.appendChild(grid);

    return wrapper;
  };

  let competitiveIcon = "/assets/VALORANT/Competitive.png";
  let TDMIcon = "/assets/VALORANT/TDM.png";

  section.appendChild(
    createMapSection("Competitive", competitiveMaps, competitiveIcon)
  );
  section.appendChild(
    createMapSection("Team Deathmatch (TDM)", tdmMaps, TDMIcon)
  );

  main.appendChild(section);
};
