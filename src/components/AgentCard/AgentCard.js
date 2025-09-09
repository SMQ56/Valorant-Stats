import "./AgentCard.css"

export const AgentCard = (agent) => {
  return `
    <article class="agent-card reveal-scroll " data-name="${agent.name}">
      <img src="${agent.background}" alt="BG ${agent.name}" class="card-bg"/>
      <img src="${agent.image}" alt="${agent.name}" class="card-img" />
      <h3 class="card-name">${agent.name}</h3>
    </article>
  `;
};


