export const fetchArmorSets = async () => {
  const response = await fetch("https://mhw-db.com/armor/sets");
  return response.json();
};

export const fetchSkills = async () => {
  const response = await fetch("https://mhw-db.com/skills");
  return response.json();
};