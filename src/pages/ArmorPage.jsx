import React from "react";
import ArmorPiece from "../components/ArmorPiece";

const ArmorPage = ({ armorSet, onAddToCustomSet }) => {
  const { name, pieces, totalSkills, resistances, images } = armorSet;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Armor Set Name and Images */}
      <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
      <div className="flex justify-center gap-4 mt-4">
        <img
          src={images?.imageMale || "/placeholder.png"}
          alt={`${name} Male`}
          className="w-32 h-32 object-contain"
        />
        <img
          src={images?.imageFemale || "/placeholder.png"}
          alt={`${name} Female`}
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* Total Resistances */}
      <div className="mt-6 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold">Total Resistances</h2>
        <ul className="mt-2">
          <li>Fire: {resistances.fire ?? "N/A"}</li>
          <li>Water: {resistances.water ?? "N/A"}</li>
          <li>Thunder: {resistances.thunder ?? "N/A"}</li>
          <li>Ice: {resistances.ice ?? "N/A"}</li>
          <li>Dragon: {resistances.dragon ?? "N/A"}</li>
        </ul>
      </div>

      {/* Total Skills */}
      <div className="mt-6 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold">Total Skills</h2>
        <ul className="mt-2">
          {totalSkills.length > 0 ? (
            totalSkills.map((skill, index) => (
              <li key={index}>
                {skill.name}: Level {skill.totalLevel}
              </li>
            ))
          ) : (
            <p>No skills available.</p>
          )}
        </ul>
      </div>

      {/* Armor Pieces */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Armor Pieces</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {pieces.map((piece) => (
            <ArmorPiece
              key={piece.id}
              piece={piece}
              onAddToCustomSet={onAddToCustomSet}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArmorPage;
