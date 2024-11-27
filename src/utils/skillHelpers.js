// src/utils/skillHelpers.js

const API_BASE_URL = "https://mhw-db.com";

// Fetch all skills
export const fetchAllSkills = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/skills/`);
    if (!response.ok) {
      throw new Error(`Failed to fetch skills: ${response.status}`);
    }
    const data = await response.json();
    return data.map((skill) => ({
      id: skill.id,
      name: skill.name,
      description: skill.description,
    }));
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
};

// Fetch a specific skill by its ID
export const fetchSkillById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/skills/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch skill: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching skill:", error);
    return null;
  }
};

// Fetch armor pieces that include a specific skill
export const fetchArmorPiecesWithSkill = async (skillId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/armor/`);
    if (!response.ok) {
      throw new Error(`Failed to fetch armor pieces: ${response.status}`);
    }
    const data = await response.json();

    return data
      .filter((piece) =>
        piece.skills.some((skill) => skill.skill.id === skillId)
      )
      .map((piece) => ({
        id: piece.id,
        name: piece.name,
        skillLevel: piece.skills.find((skill) => skill.skill.id === skillId)
          .level,
      }));
  } catch (error) {
    console.error("Error fetching armor pieces with skill:", error);
    return [];
  }
};
