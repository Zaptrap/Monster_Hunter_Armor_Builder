import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSkills } from "../utils/api";

const SkillDetailsPage = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    fetchSkills().then((skills) => {
      const foundSkill = skills.find((skill) => skill.id === id);
      setSkill(foundSkill);
    });
  }, [id]);

  if (!skill) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{skill.name}</h1>
      <p>{skill.description}</p>
      <h2 className="text-xl mt-4 font-bold">Found On:</h2>
      <ul>
        {skill.armorPieces.map((armor) => (
          <li key={armor.id}>{armor.name} (Level {armor.level})</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillDetailsPage;
