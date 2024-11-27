import { useState } from "react";
import SkillList from "../components/SkillList";
import ArmorDetails from "../components/ArmorDetails";

const Encyclopedia = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Encyclopedia</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mt-4">
        <button
          className={`py-2 px-4 ${activeTab === "skills" ? "bg-gray-800 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
        <button
          className={`py-2 px-4 ${activeTab === "armor" ? "bg-gray-800 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("armor")}
        >
          Armor Sets
        </button>
      </div>

      {/* Content */}
      <div className="mt-4">
        {activeTab === "skills" && <SkillList />}
        {activeTab === "armor" && <ArmorDetails />}
      </div>
    </div>
  );
};

export default Encyclopedia;