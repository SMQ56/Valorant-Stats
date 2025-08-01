import "./AgentModal.css";

export const renderAgentModal = (agent) => {
  const modal = document.createElement("div");
  modal.classList.add("agent-modal");

  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-btn">&times;</button>
      <header class="modal-header">
        <img src="${agent.icon}" alt="${agent.name}" class="agent-icon" />
        <h2>${agent.name}</h2>
      </header>
      <p>${agent.description}</p>
      
      <div class="modal-role">
        <img src="${agent.role.icon}" alt="${agent.role.name}" />
        <h3>${agent.role.name}</h3>
      </div>

      <div class="modal-abilities">
        ${agent.abilities
          .map(
            (a, i) => `
          <img 
            src="${a.icon}" 
            alt="${a.name}" 
            class="ability-icon" 
            data-index="${i}"
          />`
          )
          .join("")}
        <div class="ability-info">
          <h4 id="ability-name">${agent.abilities[0].name}</h4>
          <p id="ability-desc">${agent.abilities[0].description}</p>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  setTimeout(() => modal.classList.add("open"), 10);

  // Cierre
  modal.querySelector(".close-btn").addEventListener("click", () => {
    modal.classList.remove("open");
    setTimeout(() => modal.remove(), 300);
  });

  // Habilidades interactivas
  const icons = modal.querySelectorAll(".ability-icon");
  icons.forEach((icon, i) => {
    icon.addEventListener("click", () => {
      icons.forEach((ic) => ic.classList.remove("active"));
      icon.classList.add("active");

      modal.querySelector("#ability-name").textContent =
        agent.abilities[i].name;
      modal.querySelector("#ability-desc").textContent =
        agent.abilities[i].description;
    });
  });

  icons[0].classList.add("active");
};
