const URL = "https://valorant-api.com/v1";

/**
 * Fetches data from VALORANT API.
 * @param {string} endpoint - The endpoint after /v1/
 * @returns {Promise<Object[]>} - Promise resolving to an array of items from the API, or an empty array on error.
 */

const fetchData = async (endpoint) => {
  try {
    const res = await fetch(`${URL}/${endpoint}`);
    const data = await res.json();

    return data.data;
  } catch (err) {
    console.error(`Error fetching ${endpoint}:`, err);
    return [];
  }
};

export const getAllAgents = async () => {
  const agents = await fetchData("agents?isPlayableCharacter=true");

  const mappedAgents = agents.map((agent) => ({
    name: agent.displayName,
    description: agent.description,
    image: agent.fullPortrait,
    background: agent.background,
    icon: agent.displayIcon,
    role: {
      name: agent.role?.displayName || "Unknown",
      description: agent.role?.description || "",
      icon: agent.role?.displayIcon || "",
    },
    abilities: agent.abilities
      .filter(
        (ability) =>
          ability.displayName && ability.description && ability.displayIcon
      )
      .map((ability) => ({
        name: ability.displayName,
        description: ability.description,
        icon: ability.displayIcon,
      })),
  }));

  return mappedAgents;
};


export const getAllMaps = () => fetchData("maps");
export const getAllWeapons = () => fetchData("weapons");
