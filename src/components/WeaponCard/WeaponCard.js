import "./WeaponCard.css";

export const WeaponCard = (weapon) => {
  return `
    <article class="weapon-card scale-in-scroll" data-name="${weapon.name}">
      <img src="${weapon.image}" alt="${weapon.name}" class="weapon-img"/>
      <div class="name-section">
          <h3 class="weapon-name">${weapon.name}</h3>
          <h4 class="weapon-category">${weapon.category}</h4>
      </div>
    </article>
  `;
};