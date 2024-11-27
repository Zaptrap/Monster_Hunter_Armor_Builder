import { useEffect, useState } from "react";
import { fetchSkills } from "../utils/api";
import { Link } from "react-router-dom";

const SkillList = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchSkills().then((data) => setSkills(data));
  }, []);

  if (!skills.length) return <p>Loading...</p>;

  return (
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill.id}>
          <Link to={`/skills/${skill.id}`} className="text-blue-500 hover:underline">
            {skill.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
