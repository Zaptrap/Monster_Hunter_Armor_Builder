import React from "react";

const SkillDetails = ({ skill, armorPiecesWithSkill }) => {
  const { name, description } = skill;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Skill Name and Description */}
      <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
      <p className="mt-4 text-lg">{description}</p>

      {/* Armor Pieces with this Skill */}
      <div className="mt-6 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold">Armor Pieces with this Skill</h2>
        <ul className="mt-2">
          {armorPiecesWithSkill.length > 0 ? (
            armorPiecesWithSkill.map((piece) => (
              <li key={piece.id}>
                {piece.name} - Level {piece.skillLevel}
              </li>
            ))
          ) : (
            <p>No armor pieces with this skill.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SkillDetails;
