import { useState, useEffect } from "react";
import { fetchArmorSets } from "../utils/api";

const ArmorDetails = () => {
  const [armorSets, setArmorSets] = useState([]);
  const [activeType, setActiveType] = useState("Head");

  useEffect(() => {
    fetchArmorSets().then((data) => setArmorSets(data));
  }, []);

  const armorTypes = ["Head", "Torso", "Gloves", "Waist", "Legs"];
  const filteredArmor = armorSets.filter((set) => set.type === activeType.toLowerCase());

  if (!armorSets.length) return <p>Loading...</p>;

  return (
    <div>
      {/* Armor Type Tabs */}
      <div className="flex space-x-2">
        {armorTypes.map((type) => (
          <button
            key={type}
            className={`py-2 px-4 ${activeType === type ? "bg-gray-800 text-white" : "bg-gray-200"}`}
            onClick={() => setActiveType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Armor List */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        {filteredArmor.map((armor) => (
          <div key={armor.id} className="border p-4">
            <h2 className="text-lg font-bold">{armor.name}</h2>
            <img src={armor.imageMale || armor.imageFemale} alt={armor.name} className="w-full" />
            <ul>
              <li>Base Defense: {armor.defense.base}</li>
              <li>Fire Resistance: {armor.resistances.fire}</li>
              <li>Skills:</li>
              <ul>
                {armor.skills.map((skill, index) => (
                  <li key={index}>{skill.skill?.name || "Unknown Skill"}: Level {skill.level}</li>
                ))}
              </ul>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArmorDetails;
