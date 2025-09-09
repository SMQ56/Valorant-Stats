import { openModal } from "../Modal/Modal";
import "./WeaponModal.css";

export const renderWeaponModal = (weapon) => {
  const content = `
    <header class="modal-header">
        <div>
            <h2>${weapon.name}</h2>
            <span class="weapon-category">${weapon.category}</span>
        </div>
      <img src="${weapon.image}" alt="${
    weapon.name
  }" class="modal-weapon-img" />
    </header>

    <section class="weapon-shop">
      <p><strong>Cost:</strong> ${weapon.shopData?.cost ?? 0} 💰</p>
    </section>

    ${
      weapon.weaponStats
        ? `
      <section class="weapon-stats">
        <h3>Weapon Stats</h3>
            <ul>
                <li>
                    <div class="stat-label">
                        <span>Fire Rate</span>
                        <span>${weapon.weaponStats.fireRate}</span>
                    </div>
                    <div class="stat-bar">
                        <div class="stat-fill stat-fire-rate" style="width:${Math.min((weapon.weaponStats.fireRate / 15) * 100,
                      100)}%">
                        </div>
                    </div>
                </li>

                <li>
                    <div class="stat-label">
                        <span>Magazine Size</span>
                        <span>${weapon.weaponStats.magazineSize}</span>
                    </div>
                    <div class="stat-bar">
                        <div class="stat-fill stat-magazine" style="width:${Math.min((weapon.weaponStats.magazineSize / 100) * 100,100)}%"></div>
                    </div>
                </li>

                <li>
                    <div class="stat-label">
                        <span>Reload Time</span>
                        <span>${weapon.weaponStats.reloadTimeSeconds}s</span>
                    </div>
                    <div class="stat-bar">
                        <div class="stat-fill stat-reload" style="width:${Math.min((weapon.weaponStats.reloadTimeSeconds / 5) * 100,100)}%">
                        </div>
                    </div>
                </li>

                <li>
                    <div class="stat-label">
                        <span>Wall Penetration</span>
                        <span>${weapon.weaponStats.wallPenetration}</span>
                    </div>
                    <div class="stat-bar">
                        <div class="stat-fill stat-penetration" style="width:${
                              weapon.weaponStats.wallPenetration === "High"
                                ? 100
                                : weapon.weaponStats.wallPenetration ===
                                  "Medium"
                                ? 60
                                : 30
                            }%">
                        </div>
                    </div>
                </li>
            </ul>

      </section>

      <section class="damage-ranges">
        <h3>Damage Ranges</h3>
        <table>
          <thead>
            <tr>
              <th>Range</th>
              <th>Head</th>
              <th>Body</th>
              <th>Leg</th>
            </tr>
          </thead>
          <tbody>
            ${weapon.weaponStats.damageRanges
              .map(
                (d) => `
              <tr>
                <td>${d.rangeStartMeters}m - ${d.rangeEndMeters}m</td>
                <td>${d.headDamage}</td>
                <td>${d.bodyDamage}</td>
                <td>${d.legDamage}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </section>
    `
        : "<p>No weapon stats available.</p>"
    }

    <button class="skins-btn">View Skins</button>
  `;

  const modal = openModal(content);

  // Botón para abrir segundo modal de skins
  const skinsBtn = modal.querySelector(".skins-btn");
  if (skinsBtn) {
    skinsBtn.addEventListener("click", () => {
      renderWeaponSkinsModal(weapon);
    });
  }
};

// Modal secundario para skins

export const renderWeaponSkinsModal = (weapon) => {
  const allChromas = weapon.skins.flatMap((skin) =>
    (skin.chromas || [])
      .filter(
        (chroma) => chroma.displayName && chroma.displayIcon && skin.wallpaper
      )
      .map((chroma) => ({
        icon: chroma.displayIcon,
        name: chroma.displayName,
        video: chroma.streamedVideo,
        wallpaper: skin.wallpaper,
      }))
  );

  const allLevels = weapon.skins.flatMap((skin) =>
    (skin.levels || [])
      .filter(
        (level) => level.displayName && level.displayIcon && skin.wallpaper
      )
      .map((level) => ({
        icon: level.displayIcon,
        name: level.displayName,
        video: level.streamedVideo,
        wallpaper: skin.wallpaper,
      }))
  );

  const firstChromaVideo = allChromas.find((c) => c.video)?.video;
  const firstLevelVideo = allLevels.find((l) => l.video)?.video;

  const skinsContent = `
    <header class="modal-header">
      <h2>${weapon.name} Skins</h2>
    </header>

    <!-- CHROMAS -->
      <section class="chromas-section">
        <h3>CHROMAS</h3>
        ${
          allChromas.length > 0
            ? `
              <div class="wrapper chromas-wrapper">
                ${allChromas
                  .map(
                    (c, i) => `
                  <div class="itemLeft item${i + 1}" 
                       style="background-image: url('${
                         c.wallpaper
                       }'); background-size: cover; background-position: center;">
                    <img src="${c.icon}" alt="chroma" />
                    <p>${c.name}</p>
                  </div>
                `
                  )
                  .join("")}
              </div>
            `
            : `<p class="no-chromas">No chromas available</p>`
        }
      </section>

      <!-- LEVELS -->
      <section class="levels-section">
        <h3>LEVELS</h3>
        ${
          allLevels.length > 0
            ? `
              <div class="wrapper levels-wrapper">
                ${allLevels
                  .map(
                    (l, i) => `
                  <div class="itemRight item${i + 1}" 
                       style="background-image: url('${
                         l.wallpaper
                       }'); background-size: cover; background-position: center;">
                    <img src="${l.icon}" alt="level" />
                    <p>${l.name}</p>
                  </div>
                `
                  )
                  .join("")}
              </div>
            `
            : `<p class="no-levels">No levels available</p>`
        }
      </section>

    <!-- VIDEOS -->
      <section class="videos-section">
        <h3>VIDEOS</h3>
        <div class="videos-wrapper">
          ${
            firstChromaVideo
              ? `<video controls src="${firstChromaVideo}" class="skin-video"></video>`
              : `<p>No chroma video available</p>`
          }
          ${
            firstLevelVideo
              ? `<video controls src="${firstLevelVideo}" class="skin-video"></video>`
              : `<p>No level video available</p>`
          }
        </div>
      </section>

  `;

  const modal = openModal(skinsContent);

  function applyDynamicAnimation(wrapperSelector, direction = "left") {
    const items = modal.querySelectorAll(
      `${wrapperSelector} .item${direction === "left" ? "Left" : "Right"}`
    );
    const total = items.length;
    if (total === 0) return;

    items.forEach((item, index) => {
      const delay = (60 / total) * (total - index - 1) * -1;
      item.style.animationDelay = `${delay}s`;

      if (direction === "left") {
        item.style.left = `max(calc(200px * ${total}), 100%)`;
      } else {
        item.style.right = `max(calc(200px * ${total}), calc(100% + 200px))`;
      }
    });
  }

  applyDynamicAnimation(".chromas-wrapper", "left");
  applyDynamicAnimation(".levels-wrapper", "right");
};
