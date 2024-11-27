// src/utils/armorHelpers.js

const API_BASE_URL = "https://mhw-db.com";

// Fetch all armor sets
export const fetchAllArmorSets = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/armor/`);
    if (!response.ok) {
      throw new Error(`Failed to fetch armor sets: ${response.status}`);
    }
    const data = await response.json();

    // Organize armor pieces into sets by their set name
    const armorSets = {};
    data.forEach((piece) => {
      if (piece.armorSet?.name) {
        if (!armorSets[piece.armorSet.name]) {
          armorSets[piece.armorSet.name] = {
            name: piece.armorSet.name,
            resistances: {
              fire: 0,
              water: 0,
              thunder: 0,
              ice: 0,
              dragon: 0,
            },
            totalSkills: [],
            pieces: [],
            images: {
              imageMale: null,
              imageFemale: null,
            },
          };
        }

        // Add resistances and organize skills
        const set = armorSets[piece.armorSet.name];
        set.resistances.fire += piece.resistances.fire || 0;
        set.resistances.water += piece.resistances.water || 0;
        set.resistances.thunder += piece.resistances.thunder || 0;
        set.resistances.ice += piece.resistances.ice || 0;
        set.resistances.dragon += piece.resistances.dragon || 0;

        // Process skills
        piece.skills.forEach((skill) => {
          const existingSkill = set.totalSkills.find(
            (s) => s.id === skill.skill.id
          );
          if (existingSkill) {
            existingSkill.totalLevel += skill.level;
          } else {
            set.totalSkills.push({
              id: skill.skill.id,
              name: skill.skill.name,
              totalLevel: skill.level,
            });
          }
        });

        // Add images
        set.images.imageMale = set.images.imageMale || piece.assets.imageMale;
        set.images.imageFemale = set.images.imageFemale || piece.assets.imageFemale;

        // Add the piece to the set
        set.pieces.push(piece);
      }
    });

    return Object.values(armorSets);
  } catch (error) {
    console.error("Error fetching armor sets:", error);
    return [];
  }
};

// Fetch a specific armor set by its name
export const fetchArmorSetByName = async (setName) => {
  const allSets = await fetchAllArmorSets();
  return allSets.find((set) => set.name.toLowerCase() === setName.toLowerCase());
};

export const fetchArmorPieceById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/armor/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch armor piece: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching armor piece:", error);
    return null;
  }
};
