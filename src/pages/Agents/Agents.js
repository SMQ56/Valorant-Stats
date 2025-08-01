import { cleanPage } from "../../utils/cleanPage.js";
import { getAllAgents } from "../../data/api.js";
import { AgentCard } from "../../components/AgentCard/AgentCard.js";
import { renderAgentModal } from "../../components/Modal/AgentModal.js";
import "./Agents.css";

export const Agents = async () => {
  const main = document.querySelector("main");
  cleanPage(main);

  const agents = await getAllAgents();

  const section = document.createElement("section");
  section.classList.add("agents-section");

  const title = document.createElement("h2");
  title.textContent = "Agents";
  section.appendChild(title);

  // Buscador + Filtros
  const controls = document.createElement("div");
  controls.classList.add("agent-controls");

  controls.innerHTML = `
    <input type="text" placeholder="Search agent..." class="agent-search" />
   
    <select class="role-filter">
        <button>
            <selectedcontent></selectedcontent>
        </button>
        <option value="All">All Roles</option>

        <option value="Controller">
            <span class="icon">
                <img src="/assets/VALORANT/Controller.svg" alt="Controller" />
            </span> 
            <span>Controller</span>
        </option>

        <option value="Duelist">
            <span class="icon">
                <img src="/assets/VALORANT/Duelist.svg" alt="Duelist" />
            </span> 
            <span>Duelist</span>
        </option>

        <option value="Initiator">
            <span class="icon">
                <img src="/assets/VALORANT/Initiator.svg" alt="Initiator" />
            </span>
            <span>Initiator</span>
        </option>

        <option value="Sentinel">
            <span class="icon">
                <img src="/assets/VALORANT/Sentinel.svg" alt="Sentinel" />
            </span> 
            <span>Sentinel</span>
        </option>
    </select>

  `;

  const grid = document.createElement("div");
  grid.classList.add("card-grid");

  const renderAgents = (filteredAgents) => {
    grid.innerHTML = "";

    const sortAgents = filteredAgents.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    sortAgents.forEach((agent) => {
      grid.innerHTML += AgentCard(agent);
    });

    document.querySelectorAll(".agent-card").forEach((card) => {
      card.addEventListener("click", () => {
        const agentName = card.dataset.name;
        const agentData = agents.find((a) => a.name === agentName);
        if (agentData) renderAgentModal(agentData);
      });
    });
  };
  renderAgents(agents);

  /* ------------------- */

  const searchInput = controls.querySelector(".agent-search");
  const roleSelect = controls.querySelector(".role-filter");

  const filterAgents = () => {
    const search = searchInput.value.toLowerCase();
    const role = roleSelect.value;

    const filtered = agents.filter((agent) => {
      const matchesName = agent.name.toLowerCase().includes(search);
      const matchesRole = role === "All" || agent.role.name === role;
      return matchesName && matchesRole;
    });

    renderAgents(filtered);
  };

  searchInput.addEventListener("input", filterAgents);
  roleSelect.addEventListener("change", filterAgents);

  section.appendChild(controls);
  section.appendChild(grid);
  main.appendChild(section);

  // Abrir modal al hacer click en una tarjeta

  document.querySelectorAll(".agent-card").forEach((card) => {
    card.addEventListener("click", () => {
      const agentName = card.dataset.name;
      const agentData = agents.find((a) => a.name === agentName);
      if (agentData) renderAgentModal(agentData);
    });
  });
};
