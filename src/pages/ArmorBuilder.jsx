import { useState } from "react";
import ArmorPiece from "../components/ArmorPiece";

const ArmorBuilder = () => {
  const [customSet, setCustomSet] = useState([]);
  const [savedSets, setSavedSets] = useState([]);

  const addToSet = (piece) => {
    if (!customSet.some((p) => p.id === piece.id)) {
      setCustomSet([...customSet, piece]);
    }
  };

  const saveSet = () => {
    setSavedSets([...savedSets, customSet]);
    setCustomSet([]);
  };

  const totalSkills = customSet.reduce((totals, piece) => {
    piece.skills.forEach((skill) => {
      if (!totals[skill.skill.name]) {
        totals[skill.skill.name] = 0;
      }
      totals[skill.skill.name] += skill.level;
    });
    return totals;
  }, {});

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Armor Builder</h1>
      <div className="grid grid-cols-5 gap-4">
        {customSet.map((piece) => (
          <ArmorPiece key={piece.id} piece={piece} />
        ))}
      </div>
      <h2 className="text-xl font-bold">Total Skills:</h2>
      <ul>
        {Object.entries(totalSkills).map(([name, level]) => (
          <li key={name}>{name}: Level {level}</li>
        ))}
      </ul>
      <button className="bg-green-500 text-white py-2 px-4 mt-4" onClick={saveSet}>
        Save Set
      </button>
    </div>
  );
};

export default ArmorBuilder;