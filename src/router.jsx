import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Encyclopedia from "./pages/Encyclopedia";
import ArmorBuilder from "./pages/ArmorBuilder";
import SavedSets from "./pages/SavedSets";
import SkillDetails from "./components/SkillDetails";
import ArmorDetails from "./components/ArmorDetails";
import NotFound from "./components/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/encyclopedia" element={<Encyclopedia />} />
      <Route path="/armor-builder" element={<ArmorBuilder />} />
      <Route path="/saved-sets" element={<SavedSets />} />
      <Route path="/skills/:skillId" element={<SkillDetails />} />
      <Route path="/armor/:id" element={<ArmorDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
