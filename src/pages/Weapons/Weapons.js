import { cleanPage } from "../../utils/cleanPage.js";
import { getAllWeapons } from "../../data/api.js";
import { WeaponCard } from "../../components/WeaponCard/WeaponCard.js";
import { renderWeaponModal } from "../../components/WeaponModal/WeaponModal";
import "./Weapons.css";

export const Weapons = async () => {
  const main = document.querySelector("main");
  cleanPage(main);

  const weapons = await getAllWeapons();

  const section = document.createElement("section");
  section.classList.add("page-section");

  const title = document.createElement("h2");
  title.textContent = "Weapons";
  section.appendChild(title);

  // Buscador + Filtros
  const controls = document.createElement("div");
  controls.classList.add("page-controls");

  controls.innerHTML = `
    <input type="text" placeholder="Search weapon..." class="weapon-search" />
   
    <select class="category-filter">
        <button>
            <selectedcontent></selectedcontent>
        </button>
        <option value="All">All Categories</option>

        <option value="Heavy Weapons">
            <span class="weapons-icon">
                <img src="/assets/VALORANT/Heavy-Weapons.png" alt="Heavy Weapons" />
            </span> 
            <span>Heavy Weapons</span>
        </option>

        <option value="Sniper Rifles">
            <span class="weapons-icon">
                <img src="/assets/VALORANT/Sniper.png" alt="Sniper Rifles" />
            </span> 
            <span>Sniper Rifles</span>
        </option>

        <option value="Shotguns">
            <span class="weapons-icon">
                <img src="/assets/VALORANT/Shotgun.png" alt="Shotguns" />
            </span>
            <span>Shotguns</span>
        </option>

        <option value="Rifles">
            <span class="weapons-icon">
                <img src="/assets/VALORANT/Rifles.png" alt="Rifles" />
            </span> 
            <span>Rifles</span>
        </option>

        <option value="SMGs">
            <span class="weapons-icon">
                <img src="/assets/VALORANT/SMG.png" alt="SMGs" />
            </span> 
            <span>SMGs</span>
        </option>

        <option value="Pistols">
            <span class="weapons-icon">
                <img src="/assets/VALORANT/Pistols.png" alt="Pistols" />
            </span> 
            <span>Pistols</span>
        </option>
    </select>
  `;

  const grid = document.createElement("div");
  grid.classList.add("weapons-card-grid");

  const renderWeapons = (filteredWeapons) => {
    grid.innerHTML = "";

    const sorted = filteredWeapons.sort((a, b) => a.name.localeCompare(b.name));

    sorted.forEach((weapon) => {
      grid.innerHTML += WeaponCard(weapon);
    });

    document.querySelectorAll(".weapon-card").forEach((card) => {
      card.addEventListener("click", () => {
        const weaponName = card.dataset.name;
        const weaponData = weapons.find((w) => w.name === weaponName);
        if (weaponData) renderWeaponModal(weaponData);
      });
    });
  };

  renderWeapons(weapons);

  const searchInput = controls.querySelector(".weapon-search");
  const categorySelect = controls.querySelector(".category-filter");

  const filterWeapons = () => {
    const search = searchInput.value.toLowerCase();
    const category = categorySelect.value;

    const filtered = weapons.filter((weapon) => {
      const matchesName = weapon.name.toLowerCase().includes(search);
      const weaponCategory = weapon.category || "Other";
      const matchesCategory = category === "All" || weaponCategory === category;
      return matchesName && matchesCategory;
    });

    renderWeapons(filtered);
  };

  searchInput.addEventListener("input", filterWeapons);
  categorySelect.addEventListener("change", filterWeapons);

  section.appendChild(controls);
  section.appendChild(grid);
  main.appendChild(section);

  grid.querySelectorAll(".weapon-card").forEach((card, i) => {
    card.addEventListener("click", () => {
      renderWeaponModal(weapons[i]);
    });
  });
};
