import { useState } from "react";

const SavedSets = () => {
  const [savedSets, setSavedSets] = useState(JSON.parse(localStorage.getItem("savedSets")) || []);

  const deleteSet = (index) => {
    const updatedSets = savedSets.filter((_, i) => i !== index);
    setSavedSets(updatedSets);
    localStorage.setItem("savedSets", JSON.stringify(updatedSets));
  };

  if (!savedSets.length) return <p>No saved sets found.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Saved Sets</h1>
      <div className="space-y-4">
        {savedSets.map((set, index) => (
          <div key={index} className="border p-4">
            <h2 className="text-lg font-bold">Set {index + 1}</h2>
            <ul>
              {set.map((piece) => (
                <li key={piece.id}>{piece.name}</li>
              ))}
            </ul>
            <button
              className="mt-2 bg-red-500 text-white py-1 px-4 rounded"
              onClick={() => deleteSet(index)}
            >
              Delete Set
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedSets;
