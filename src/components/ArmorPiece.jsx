import React from "react";

const ArmorPiece = ({ piece, onAddToCustomSet }) => {
  const { name, type, rarity, skills, crafting, resistances, defense, imageMale, imageFemale } = piece;

  return (
    <div className="p-4 bg-white border rounded shadow">
      {/* Armor Name and Image */}
      <h4 className="text-xl font-bold">{name}</h4>
      <img
        src={imageMale || imageFemale || "/placeholder.png"} // Placeholder image if none is provided
        alt={name}
        className="w-full h-32 object-contain mt-2"
      />

      {/* Basic Details */}
      <p>Type: {type}</p>
      <p>Rarity: {rarity}</p>
      <p>Base Defense: {defense.base}</p>

      {/* Resistances */}
      <h5 className="font-bold mt-4">Resistances</h5>
      <ul>
        <li>Fire: {resistances.fire ?? "N/A"}</li>
        <li>Water: {resistances.water ?? "N/A"}</li>
        <li>Thunder: {resistances.thunder ?? "N/A"}</li>
        <li>Ice: {resistances.ice ?? "N/A"}</li>
        <li>Dragon: {resistances.dragon ?? "N/A"}</li>
      </ul>

      {/* Skills */}
      <h5 className="font-bold mt-4">Skills</h5>
      <ul>
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <li key={index}>
              {skill.skill?.name || "Unknown Skill"}: Level {skill.level}
            </li>
          ))
        ) : (
          <p>No skills available.</p>
        )}
      </ul>

      {/* Crafting Materials */}
      <h5 className="font-bold mt-4">Crafting Materials</h5>
      <ul>
        {crafting.materials.map((material, index) => (
          <li key={index}>
            {material.quantity}x {material.item.name} - {material.item.description}
          </li>
        ))}
      </ul>

      {/* Add to Custom Set Button */}
      {onAddToCustomSet && (
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => onAddToCustomSet(piece)}
        >
          Add to Custom Set
        </button>
      )}
    </div>
  );
};

export default ArmorPiece;
