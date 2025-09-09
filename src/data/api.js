import { mapDescriptions } from "./mapDescriptions";
import { mappedWeapons } from "./mappedWeapons";

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

export const getAllMaps = async () => {
  const maps = await fetchData("maps");

  const mapModes = {
    Ascent: "Competitive",
    Split: "Competitive",
    Fracture: "Competitive",
    Bind: "Competitive",
    Breeze: "Competitive",
    Haven: "Competitive",
    Lotus: "Competitive",
    Sunset: "Competitive",
    Pearl: "Competitive",
    Icebox: "Competitive",
    Abyss: "Competitive",
    "The Range": "Practice",
    District: "TDM",
    Kasbah: "TDM",
    Drift: "TDM",
    Glitch: "TDM",
    Piazza: "TDM",
    Corrode: "TDM",
  };

  const mappedMaps = maps.map((map) => ({
    name: map.displayName,
    description:
      mapDescriptions[map.displayName] || "Description not available.",
    mode: mapModes[map.displayName] || "Unknown",
    miniMap: map.displayIcon,
    nameBG: map.listViewIcon,
    tallIcon: map.listViewIconTall,
    splash: map.splash,
    hoverBG: map.stylizedBackgroundImage,
  }));

  return mappedMaps;
};

export const getAllWeapons = async () => {
  const weapons = await fetchData("weapons");
  const parsedWeapons = mappedWeapons(weapons);

  return parsedWeapons;
};
