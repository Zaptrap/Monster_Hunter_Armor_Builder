import React, { useState, useEffect } from 'react';

const Homepage = () => {
  const [armorSet, setArmorSet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArmorSet();
  }, []);

  const fetchArmorSet = async () => {
    try {
      const response = await fetch('https://mhw-db.com/armor-sets');
      if (!response.ok) {
        throw new Error('Failed to fetch armor sets');
      }
      const data = await response.json();
      
      if (data.length > 0) {
        setArmorSet(data[0]);
      } else {
        setError('No armor sets found');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!armorSet) {
    return <p>No armor set available</p>;
  }

  const { name, defense, resistances, pieces, skills } = armorSet;

  const defenseBase = defense ? defense.base : 'N/A';
  const resistancesList = resistances ? resistances.map((res) => `${res.type}: ${res.value}`).join(', ') : 'N/A';
  const skillList = skills ? skills.map((skill) => `${skill.skill.name}: Level ${skill.level}`).join(', ') : 'N/A';

  return (
    <div className="homepage p-4">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>

      <div className="armor-details">
        <h2 className="text-xl font-semibold">Armor Set Details</h2>
        <p><strong>Defense Base:</strong> {defenseBase}</p>
        <p><strong>Resistances:</strong> {resistancesList}</p>
        <p><strong>Skills:</strong> {skillList}</p>

        <h3 className="text-lg font-semibold mt-4">Armor Pieces</h3>
        <ul>
          {pieces && pieces.length > 0 ? (
            pieces.map((piece, index) => (
              <li key={index} className="mt-2">
                <h4 className="font-bold">{piece.name}</h4>
                <p>Type: {piece.type}</p>
                <p>Rarity: {piece.rarity}</p>
                {/* Assuming each piece has skills, crafting materials, etc */}
                <p><strong>Skills:</strong> {piece.skills?.map(skill => `${skill.skill.name}: Level ${skill.level}`).join(', ') || 'None'}</p>
              </li>
            ))
          ) : (
            <p>No armor pieces found</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Homepage;